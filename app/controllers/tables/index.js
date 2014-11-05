import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'application',
  caca: function(){
    return "hello Caca";
  }(),
});
