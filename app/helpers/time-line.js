import Ember from 'ember';

export function timeLine(tableId) {

  var html = "";

  var slot = {hrs: 18, mins: 0, unitMinutes: 1};
  var duration = 180;

  do {
    html+= "<td id='" + tableId + "-" + totalTimeToString(slot) +"'> &nbsp; </td>";
    timeIncrement(slot);
    duration--;
  } while (duration > 0);

  return new Ember.Handlebars.SafeString(html);
}


function totalTimeToString(s){
  return timeToString(s.hrs) + '-' + timeToString(s.mins);
}

function timeToString(time){
  return ('0' + time ).slice(-2);
}

function timeIncrement(s){
  if (s.mins === (60 - s.unitMinutes) ) {
    s.mins = 0;
    s.hrs++;
  }else{
    s.mins += s.unitMinutes;
  }
}

export default Ember.Handlebars.makeBoundHelper(timeLine);
