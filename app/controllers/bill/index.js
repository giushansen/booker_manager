import Ember from 'ember';

export default Ember.ObjectController.extend({
  // Shortcut
  needs: 'application',
  application: Ember.computed.alias("controllers.application"),
  totalTimeToString: function(d) {
    return this.get('application').totalTimeToString(d);
  },

  start: function() {
    return this.totalTimeToString( new Date(this.get('timeIn')) );
  }.property('timeIn'),

  end: function() {
    return this.totalTimeToString( new Date(this.get('timeOut')) );
  }.property('timeOut'),
});
