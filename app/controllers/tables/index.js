import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'application',

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
