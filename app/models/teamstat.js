import DS from 'ember-data';

export default DS.Model.extend({
  homeScore: DS.attr('number'),
  awayScore: DS.attr('number'),
  homeTotalShots: DS.attr('number'),
  awayTotalShots: DS.attr('number'),
  totalHomeSaves: DS.attr('number'),
  totalAwaySaves: DS.attr('number'),
  shotHomePercentage: DS.attr('number'),
  shotAwayPercentage: DS.attr('number'),
  saveHomePercentage: DS.attr('number'),
  saveAwayPercentage: DS.attr('number'),
  penaltyHomeMins: DS.attr('number'),
  penaltyAwayMins: DS.attr('number'),
  timestamp: DS.attr('number')
});
