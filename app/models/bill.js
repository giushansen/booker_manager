import DS from 'ember-data';

var Bill = DS.Model.extend({
  customer: DS.attr('number'),
  pax: DS.attr('number'),
  timeIn: DS.attr('date'),
  timeOut: DS.attr('date'),
  amount: DS.attr('number'),
  paid: DS.attr('boolean'),
  timeBooked: DS.attr('date'),
  comments: DS.attr('string'),
  table: DS.belongsTo('table'),
});

Bill.reopenClass({
  FIXTURES: [
    { id: 1, customer: 1, pax: 4, timeIn: 'Mon Nov 03 2014 18:32:00 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 19:20:00 GMT+0800 (AWST)', comments: 'Wonderful client!'},
    { id: 2, customer: 2, pax: 4, timeIn: 'Mon Nov 03 2014 19:25:00 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 20:40:00 GMT+0800 (AWST)', comments: 'This is a bad customer'},
    { id: 3, customer: 3, pax: 2, timeIn: 'Mon Nov 03 2014 18:14:00 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 20:00:00 GMT+0800 (AWST)', comments: 'This is a good client'},
    { id: 4, customer: 4, pax: 2, timeIn: 'Mon Nov 03 2014 18:50:00 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 20:38:00 GMT+0800 (AWST)', comments: 'This is a good client'},
    { id: 5, customer: 5, pax: 4, timeIn: 'Mon Nov 03 2014 18:30:00 GMT+0800 (AWST)', amount: 39.5, paid: false, timeOut: '', comments: 'This is a good client'},
    { id: 6, customer: 6, pax: 2, timeIn: '', amount: 39.5, paid: false, timeBooked: 'Mon Nov 03 2014 20:30:00 GMT+0800 (AWST)', timeOut: '', comments: 'This is a good client'},
  ]
});

export default Bill;
