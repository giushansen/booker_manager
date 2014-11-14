import Ember from 'ember';

// Should get these variables from Settings
var hours = 18;
var minutes = 0;
var serviceDuration = 180;
var serviceSlot = 15;

export function timeHeader() {

  var html = "";

  var timeColumns = serviceDuration / serviceSlot;

  do {
    html+= "<th colspan='" + serviceSlot + "' id='" + totalTimeToString(hours, minutes) + "'>" + displayTime() + "</th>";
    timeIncrement();
    timeColumns--;
  } while (timeColumns > 0);

  return new Ember.Handlebars.SafeString(html);

}

function displayTime(){
  if (minutes === 0){
    return timeToString(hours);
  }else{
    return "<em class='small'>" + timeToString(minutes) + "</em>";
  }
}

function totalTimeToString(hours, minutes){
  return timeToString(hours) + '-' + timeToString(minutes);
}

function timeToString(time){
  return ('0' + time ).slice(-2);
}

function timeIncrement(){
  if (minutes === (60 - serviceSlot) ) {
    minutes = 0;
    hours++;
  }else{
    minutes += serviceSlot;
  }
}
export default Ember.Handlebars.makeBoundHelper(timeHeader);
