/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-trial',
    environment,
    rootURL: '/',
    locationType: 'auto',
	  firebase:'https://ember-trial-762aa.firebaseio.com/',
	  firebase: {
   apiKey: "AIzaSyBGEdNzmfYq5He1GTG_TBAvC3UOsMN-NaU",
 authDomain: "ember-trial-762aa.firebaseapp.com",
    databaseURL: "https://ember-trial-762aa.firebaseio.com",
    storageBucket: "ember-trial-762aa.appspot.com",
  },
	    torii: {
      sessionServiceName: 'session'
    },
    EmberENV: {
	
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
