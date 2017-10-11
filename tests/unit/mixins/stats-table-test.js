import Ember from 'ember';
import StatsTableMixin from 'ember-trial/mixins/stats-table';
import { module, test } from 'qunit';

module('Unit | Mixin | stats table');

// Replace this with your real tests.
test('it works', function(assert) {
  let StatsTableObject = Ember.Object.extend(StatsTableMixin);
  let subject = StatsTableObject.create();
  assert.ok(subject);
});
