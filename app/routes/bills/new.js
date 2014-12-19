import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var m = this.modelFor('bills');

    var now = new Date( Date.now() );
    var requestedTime = new Date();
    requestedTime.setHours( params['start-time'].substr(2,2) );
    requestedTime.setMinutes( params['start-time'].substr(5,2) );
    var timeDiff = Math.floor((Math.abs( now - requestedTime )/1000)/60);
    console.log(now, requestedTime);
    if (timeDiff > 15) {
      m.set('timeIn', requestedTime);
    }else{
      m.set('timeIn', now);
    }
    return m;
  },

  /* setupController: function(controller, model, transition) {
    this._super(controller, model, transition);
    // console.log(' - Bills.new route', transition.queryParams.start);
    //var t = new Date( Date.now() );
    //console.log(' - Route ', t);
    //controller.set('model', model);
    controller.set('start', 12);
  }, */
});
