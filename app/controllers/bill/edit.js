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
    var dateIn = new Date(this.get('timeIn'));
    var dateBooked = new Date(this.get('timeBooked'));
    if ( !isNaN(dateIn) ){
      return this.totalTimeToString( dateIn );
    }else{
      return this.totalTimeToString( dateBooked );
    }
  }.property('timeIn', 'timeBooked'),

  end: function() {
    return this.totalTimeToString( new Date(this.get('timeOut')) );
  }.property('timeOut'),

  status: function() {
    var timeOutDate = new Date(this.get('timeOut'));
    var timeBookedDate = new Date(this.get('timeBooked'));

    if( this.get('paid') ){
      return 'Paid';
    }else if ( !isNaN(timeBookedDate) ){
      return 'Booked';
    }else if ( isNaN(timeOutDate) && !this.get('paid') ){
      return 'Unpaid';
    }else if (!isNaN(timeOutDate) && !this.get('paid')){
      return 'Walk out';
    }
    return false;
  }.property('timeIn','timeOut','timeOut','paid'),

  style: function() {
    switch ( this.get('status') ) {
      case "Paid": return "color:green;";
      case "Booked": return "color:orange;";
      case "Unpaid": return "color:red;";
      case "Walkout": return "color:yellow;";
      default: return;
    }
  }.property('status'),

  actions: {
    saveBill: function(){
      var updateEvent = this.get('model').toJSON();
      updateEvent['id'] = this.get('id');
      this.store.update('bill', updateEvent).toString();
      this.transitionToRoute('bill.index', this.get('id') );
    },
  },
});
