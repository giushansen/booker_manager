import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'application',
  cica: function(){
    return "hello Caca";
  }(),
});
