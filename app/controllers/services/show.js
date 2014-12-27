import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application', 'service'],
  application: Ember.computed.alias("controllers.application"),
  service: Ember.computed.alias("controllers.service"),

  showBill: function(id) {
    this.transitionToRoute('bill.index', id);
  },
  showTable: function() {
    this.transitionToRoute('table.index', this.get('id'));
  },
  newBill: function(time) {
    this.transitionToRoute('bills.new', this.get('id'), {queryParams: {'start-time': time}});
  },
  editBill: function(bill_id) {
    this.transitionToRoute('bill.edit', bill_id);
  },

  tableLine: function(){
    var html = "",
    tableId = this.get('id'),
    hours = this.get('service').hours,
    minutes = this.get('service').minutes,
    serviceDuration = this.get('service').duration,
    unitMinutes = this.get('service').unitMinutes,
    timeToString = this.get('application').timeToString;

    var totalTimeToString = function (){
      return timeToString(hours) + '-' + timeToString(minutes);
    };

    var timeIncrement = function (){
      if (minutes === (60 - unitMinutes) ) {
        minutes = 0;
        hours++;
      }else{
        minutes += unitMinutes;
      }
    };

    do {
      html+= "<td id='" + tableId + "-" + totalTimeToString() +"'> &nbsp; </td>";
      timeIncrement();
      serviceDuration--;
    } while (serviceDuration > 0);

    return new Ember.Handlebars.SafeString(html);
  }.property(),



  /*tickTrigger: function() {
    this.tick();
  }.on('init'),*/

  tick: function() {
    Ember.run.later(this, function() {
      console.log('tick');
      // Re-render the view somehow
      this.tick();
    }, 1000);
  },
});
