import Ember from 'ember';

export default Ember.ObjectController.extend({
  // Shortcut method
  needs: ['application', 'table'],
  application: Ember.computed.alias("controllers.application"),
  totalTimeToString: function(d) {
    if ( isNaN(d) ) {
      return '-----';
    }else{
      return this.get('application').totalTimeToString(d);
    }
  },

  // Allow query params
  queryParams: ['start-time'],

  'start-time': null,

  start: function() {
    //console.log(' - Controller starti ', this.queryParams.starti );
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
    create: function(){
      var table_id = this.get('controllers.table.id');
      var _this = this;

      this.store.find('table', table_id).then(function(table){
        table.get('bills').then(function(bills){
          bills.addObject(
            _this.store.createRecord('bill', {
              customer: 1,
              pax: 4,
              timeIn: 'Mon Nov 03 2014 18:00:00 GMT+0800 (AWST)',
              amount: 33,
              paid: true,
              timeOut: 'Mon Nov 03 2014 18:10:00 GMT+0800 (AWST)',
              comments: 'Wonderful client!',
              table: table
            })
          );
        });
      });
    },
  },

});
