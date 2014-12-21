import DS from 'ember-data';

var Table = DS.Model.extend({
  number: DS.attr('number'),
  seats: DS.attr('number'),
  seatsMax: DS.attr('number'),
  canJoin: DS.attr('array'),
  bills: DS.hasMany('bill', {async: true}),
});

Table.reopenClass({
  FIXTURES: [
    { id: 1, number: 1, seats: 4, seatsMax: 5, canJoin: [2], bills: [1,2]},
    { id: 2, number: 2, seats: 4, seatsMax: 4, canJoin: [1,3], bills: [5] },
    { id: 3, number: 3, seats: 2, seatsMax: 3, canJoin: [2,4], bills: [6] },
    { id: 4, number: 4, seats: 2, seatsMax: 3, canJoin: [0], bills: [3] },
    { id: 5, number: 5, seats: 2, seatsMax: 2, canJoin: [0], bills: [4] },
    { id: 6, number: 6, seats: 2, seatsMax: 2, canJoin: [0] },
    { id: 7, number: 7, seats: 2, seatsMax: 2, canJoin: [0] },
    { id: 8, number: 8, seats: 2, seatsMax: 2, canJoin: [0] },
    { id: 9, number: 9, seats: 3, seatsMax: 3, canJoin: [0] },
    { id: 10, number: 10, seats: 2, seatsMax: 3, canJoin: [0] },
    { id: 11, number: 21, seats: 4, seatsMax: 5, canJoin: [0] },
    { id: 12, number: 22, seats: 4, seatsMax: 5, canJoin: [0] },
  ]
});

export default Table;
