import Ember from 'ember';

export default Ember.Controller.extend({
  timeToString: function(time){
    return ('0' + time ).slice(-2);
  }
});
