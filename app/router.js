import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stats');
  this.route('posts');
  this.route('addgame');
  this.route('teamstatsform');
  this.route('playstatsform');
  this.route('playerstatsform');
  this.route('verifyPlayer');
  this.route('verifyteam');
  this.route('blog');
});

export default Router;
