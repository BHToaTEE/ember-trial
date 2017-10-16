import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
   addPlayer: function() {
      var addPlayer = this.store.createRecord('playstat', {
        playerName: this.get('playerName'),
        goalsScored: this.get('goalsScored'),
		assists: this.get('assists'),
		shotsTaken: this.get('shotsTaken'),
		shootingPercentage: this.get('shootingPercentage'),
		penaltyMin: this.get('penaltyMin'),
		totalGamePts: this.get('totalGamePts'),
        timestamp: new Date().getTime()
      });
	
      addPlayer.save();
    }
  }
});