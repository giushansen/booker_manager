import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'application',

  fillTable: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      var timeToString = this.get('controllers.application').timeToString;
      var timeInDate = new Date(this.get('timeIn'));
      var timeOutDate = new Date(this.get('timeOut'));
      var timeBookedDate = new Date(this.get('timeBooked'));
      var billStatus = '';

      // Check if this bill status should be paid unpaid or booked
      if( !isNaN(timeOutDate) ){
        billStatus = 'paid';
      }else if ( isNaN(timeOutDate) && isNaN(timeBookedDate) ){
        // Add the maximum time a table can stay from the application = 90 minutes
        timeOutDate = new Date(timeInDate.getTime() + ( this.get('controllers.application').timeMax * 60 * 1000) );
        billStatus = 'unpaid';
      }else if ( !isNaN(timeBookedDate) ){
        timeInDate = timeBookedDate;
        timeOutDate = new Date(timeInDate.getTime() + ( this.get('controllers.application').timeMax * 60 * 1000) );
        billStatus = 'booked';
      }

      // Draw the bill for this given table
      var start = Ember.$("#" + this.get('table.id') + "-" + timeToString(timeInDate.getHours()) + "-" + timeToString(timeInDate.getMinutes()));
      var end = Ember.$("#" + this.get('table.id') + "-" + timeToString(timeOutDate.getHours()) + "-" + timeToString(timeOutDate.getMinutes()));
      start.nextUntil(end).addClass(billStatus);
    });
  }.observes('id', 'timeIn', 'timeOut').on('init'),

});
//new Date().toDateString() == new Date('Date here ...').toDateString()
