import DS from 'ember-data';

var Service = DS.Model.extend({
  name: DS.attr('string'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  tables: DS.hasMany('table', {async: true}),
});

Service.reopenClass({
  FIXTURES: [
    { id: 1, name: 'evening', start: 'Mon Nov 03 2014 18:00:00 GMT+0800 (AWST)', end: 'Mon Nov 03 2014 21:00:00 GMT+0800 (AWST)', tables: [1,2,3,4,5,6,7,8,9,10,11,12]},
  ]
});

export default Service;
