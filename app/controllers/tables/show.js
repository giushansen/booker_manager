import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'application',
  application: Ember.computed.alias("controllers.application"),
  coucou: "Hello Coucou",
});
