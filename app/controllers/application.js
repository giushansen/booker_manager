import Ember from 'ember';

export default Ember.Controller.extend({
  timeMax: 90,
  timeToString: function(time){
    return ('0' + time ).slice(-2);
  }
});
