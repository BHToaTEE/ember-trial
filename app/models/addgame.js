import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  homeTeam: DS.attr('string'),
  awayTeam: DS.attr('string'),
  round: DS.attr('string'),
  outcome: DS. attr('boolean'),
  timestamp: DS.attr('number')

});
