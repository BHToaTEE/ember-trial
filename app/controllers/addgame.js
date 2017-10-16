import Ember from 'ember';

export default Ember.Controller.extend({
	
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
    addGame: function() {
      var newGame = this.store.createRecord('addgame', {
        user: this.get('user'),
        homeTeam: this.get('homeTeam'),
		awayTeam: this.get('awayTeam'),
		homeScore: this.get('homeScore'),
		awayScore: this.get('awayScore'),
		outcome: this.get('outcome'),
        timestamp: new Date().getTime()
      });
	
      newGame.save();
    }
  }
});

