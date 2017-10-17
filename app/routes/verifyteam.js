import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
	return RSVP.hash ({teamstat: this.store.query('teamstat', {
		orderBy: 'id', limitToLast: 1}),
		addgame: this.store.query('addgame', {
		orderBy: 'id', limitToLast: 1
	 })

});
}
});