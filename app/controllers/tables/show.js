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
  newBill: function() {
    this.transitionToRoute('bills.new', this.get('id'));
  },
  editBill: function(bill_id) {
    this.transitionToRoute('bill.edit', bill_id);
  },
});
