import DS from 'ember-data';

export default DS.Model.extend({
  playerName: DS.attr('string'),
  goalsScored: DS.attr('number'),
  assists: DS.attr('number'),
  shotsTaken: DS.attr('number'),
  shootingPercentage: DS.attr('number'),
  penaltyMin: DS.attr('number'),
  totalGamePts: DS.attr('number'),
  timestamp: DS.attr('number')
});
