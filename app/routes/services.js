import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function () {
    //TODO dynamically choose today's most appropriate service
    //this.store.find('service', params['service_id'])
    this.transitionTo('service', 1);
  }
});
