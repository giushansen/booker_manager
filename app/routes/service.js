import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // "20141103-evening".split('-') => ["20141103", "evening"]
    // date.getFullYear() + (date.getMonth() + 1) + date.getDate()
    return this.store.find('service', params['service_id']);
  }
});
