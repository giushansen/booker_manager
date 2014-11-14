import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tables', { path: '/tables' }, function() {
    // Additional child routes will go here later
    this.resource('table', { path: 'tables/:table_id' }, function() {
        this.resource('bills', { path: '/bills' }, function() {
          // Additional child routes will go here later
        });
    });
  });
});

export default Router;
