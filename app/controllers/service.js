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

  hours: 18,
  minutes: 0,
  duration: 180,
  unitMinutes: 1,
  serviceSlot: 15,

  tableHeader: function(){
    var html = "",
    // TODO have to implement currentTime instead of hours/minutes
    currentTime = this.get('start'),
    hours = this.get('hours'),
    minutes = this.get('minutes'),
    serviceDuration = this.get('duration'),
    serviceSlot = this.get('serviceSlot'),
    timeToString = this.get('application').timeToString;

    var timeColumns = serviceDuration / serviceSlot;

    var displayTime = function (){
      if (minutes === 0){
        return timeToString(hours);
      }else{
        return "<em class='small'>" + timeToString(minutes) + "</em>";
      }
    };
    var totalTimeToString = function (){
      return timeToString(hours) + '-' + timeToString(minutes);
    };

    var timeIncrement = function (){
      if (minutes === (60 - serviceSlot) ) {
        minutes = 0;
        hours++;
      }else{
        minutes += serviceSlot;
      }
    };

    do {
      html+= "<th colspan='" + serviceSlot + "' id='" + totalTimeToString(hours, minutes) + "'>" + displayTime(hours, minutes) + "</th>";
      timeIncrement(serviceSlot, hours, minutes);
      timeColumns--;
    } while (timeColumns > 0);

    return new Ember.Handlebars.SafeString(html);
  }.property(),



});
