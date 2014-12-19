import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  application: Ember.computed.alias("controllers.application"),

  showBill: function(id) {
    this.transitionToRoute('bill.index', id);
  },
  showTable: function() {
    this.transitionToRoute('table.index', this.get('id'));
  },
  newBill: function(time) {
    this.transitionToRoute('bills.new', this.get('id'), {queryParams: {'start-time': time}});
  },
  editBill: function(bill_id) {
    this.transitionToRoute('bill.edit', bill_id);
  },

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
