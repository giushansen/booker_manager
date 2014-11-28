import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'tr',
  click: function(e) {
    var elem = $(e.target);
    if (elem.attr('data-bill')) {
      // Clicking a Bill
      this.get('controller').showBill( elem.attr('data-bill') );
    }else{
      // Clicking a Table
      this.get('controller').showTable();
    }
    return false;
  },
});
