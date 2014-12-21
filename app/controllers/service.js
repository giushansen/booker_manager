import Ember from 'ember';

export default Ember.ObjectController.extend({
  uname: function() {
    var name = this.get('name');
    return name.charAt(0).toUpperCase() + name.slice(1);
  }.property('name'),

  serviceDate: function() {
    var d = new Date( this.get('start') ),
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var serviceDate = days[d.getDay()] + ' ' + this.get('uname') + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    console.log(' - date: ', serviceDate );
    return serviceDate;
  }.property('start'),
});
