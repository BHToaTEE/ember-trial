import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {
   addTeam: function() {
      var addTeam = this.store.createRecord('addTeam', {
        homeScore: this.get('homeScore'),
        awayScore: this.get('awayScore'),
//		homeTotalShots: this.get('homeTotalShots'),
//		awayTotalShots: this.get('awayTotalShots'),
//		totalHomeSaves: this.get('totalHomeSaves'),
//        totalAwaySaves: this.get('totalAwaySaves'),
//		shotHomePercentage: this.get('shotHomePercentage'),
//		shotAwayPercentage: this.get('shotAwayPercentage'),
//		saveHomePercentage: this.get('saveHomePercentage'),
//		saveAwayPercentage: this.get('saveAwayPercentage'),
//		penaltyHomeMins: this.get('penaltyHomeMins'),
//		penaltyAwayMins: this.get('penaltyAwayMins'),
//        timestamp: new Date().getTime()
      });
	
      addTeam.save();
    }
  }
});
