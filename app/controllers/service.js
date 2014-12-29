import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  application: Ember.computed.alias("controllers.application"),

  uname: function() {
    var name = this.get('name');
    return name.charAt(0).toUpperCase() + name.slice(1);
  }.property('name'),

  serviceDate: function() {
    var d = new Date( this.get('start') ),
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()] + ' ' + this.get('uname') + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }.property('start'),

  startDate: function(){
    return new Date( this.get('start') );
  }.property('start'),

  endDate: function(){
    return new Date( this.get('end') );
  }.property('end'),

  duration: function() {
    var startDate = this.get('startDate'),
    endDate = this.get('endDate');
    return Math.round(( (endDate - startDate) / 1000) / 60);
  }.property('start', 'end'),

  tableHeader: function(){
    var html = "";
    var currentTime = new Date(this.get('startDate'));
    var serviceDuration = this.get('duration');
    var serviceSlot = 15;
    var columnsNumber = serviceDuration / serviceSlot;

    do {
      html+= "<th colspan='" + serviceSlot + "' id='" + this.totalTimeToString(currentTime) + "'>" + this.displayTime(currentTime) + "</th>";
      currentTime = this.timeIncrement(currentTime, serviceSlot);
      columnsNumber--;
    } while (columnsNumber > 0);

    return new Ember.Handlebars.SafeString(html);
  }.property(),

  timeIncrement:  function (time, slot){
    time.setMinutes(time.getMinutes() + slot);
    return time;
  },

  displayTime:  function (time){
    if (time.getMinutes() === 0){
      return this.timeToString(time.getHours());
    }else{
      return "<em class='small'>" + this.timeToString(time.getMinutes()) + "</em>";
    }
  },

  totalTimeToString: function(d){
    return this.timeToString(d.getHours()) + '-' + this.timeToString(d.getMinutes());
  },

  timeToString: function(time){
    return ('0' + time ).slice(-2);
  }

});
