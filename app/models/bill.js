import DS from 'ember-data';

var Bill = DS.Model.extend({
  customer: DS.attr('number'),
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
    { id: 1, customer: 1, timeIn: 'Mon Nov 03 2014 18:32:22 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 20:00:22 GMT+0800 (AWST)', comments: 'Wonderful client!'},
    { id: 2, customer: 2, timeIn: 'Mon Nov 03 2014 18:32:22 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 20:00:22 GMT+0800 (AWST)', comments: 'This is a bad customer'},
    { id: 3, customer: 3, timeIn: 'Mon Nov 03 2014 18:32:22 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 20:00:22 GMT+0800 (AWST)', comments: 'This is a good client'},
    { id: 4, customer: 4, timeIn: 'Mon Nov 03 2014 18:32:22 GMT+0800 (AWST)', amount: 39.5, paid: true, timeOut: 'Mon Nov 03 2014 20:00:22 GMT+0800 (AWST)', comments: 'This is a good client'},
  ]
});

export default Bill;
