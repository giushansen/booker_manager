import Ember from 'ember';

export default Ember.Controller.extend({
  timeMax: 90,

  totalTimeToString: function(d){
    return this.timeToString(d.getHours()) + ':' + this.timeToString(d.getMinutes());
  },

  timeToString: function(time){
    return ('0' + time ).slice(-2);
  }
});
