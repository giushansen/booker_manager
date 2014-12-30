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
    unitMinutes = 1,
    tableId = this.get('id'),
    currentTime = new Date ( this.get('service.start') ),
    serviceDuration = this.get('service.duration'),
    service = this.get('service');

    do {
      html+= "<td id='" + tableId + "-" + service.totalTimeToString.apply( service, [currentTime]) +"'> &nbsp; </td>";
      currentTime = service.timeIncrement(currentTime, unitMinutes);
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
