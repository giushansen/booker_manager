import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: 'application',

  fillTable: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      var timeInDate = new Date(this.get('timeIn'));
      var timeOutDate = new Date(this.get('timeOut'));
      var timeToString = this.get('controllers.application').timeToString;

      var begin = Ember
        .$("#" + this.get('table.id') + "-" + timeToString(timeInDate.getHours()) + "-" + timeToString(timeInDate.getMinutes()))
      var end = Ember
        .$("#" + this.get('table.id') + "-" + timeToString(timeOutDate.getHours()) + "-" + timeToString(timeOutDate.getMinutes()))
      begin.nextUntil(end).addClass('unpaid');;

    });
  }.observes('id', 'timeIn', 'timeOut').on('init'),

});
//new Date().toDateString() == new Date('Date here ...').toDateString()
