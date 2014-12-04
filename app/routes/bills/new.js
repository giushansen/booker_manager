import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bills');
  },
  setupController: function(controller, model) {
    var t = Date.now();
    controller.set('model', model);
    controller.set('timeIn', new Date(t));
  },
});
