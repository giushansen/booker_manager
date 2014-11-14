import Ember from 'ember';

export default Ember.ObjectController.extend({
  bills: function() {
    // deal with the change
    Ember.run.scheduleOnce('afterRender', this, function(){
    //console.log('Hi', jQuery('#1-18-08').attr('id'));
      Ember.$("#" + this.get('table.id') + "-18-08").addClass('unpaid');
    });
  }.observes('timeIn').on('init'),
});
//new Date().toDateString() == new Date('Date here ...').toDateString()
