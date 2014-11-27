import Ember from 'ember';

export default Ember.ObjectController.extend({
  // Shortcut method
  needs: 'application',
  application: Ember.computed.alias("controllers.application"),
  totalTimeToString: function(d) {
    if ( isNaN(d) ) {
      return '-----';
    }else{
      return this.get('application').totalTimeToString(d);
    }
  },

  start: function() {
    return this.totalTimeToString( new Date(this.get('timeIn')) );
  }.property('timeIn'),

  end: function() {
    return this.totalTimeToString( new Date(this.get('timeOut')) );
  }.property('timeOut'),
});
