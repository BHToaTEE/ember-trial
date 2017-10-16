import { moduleForModel, test } from 'ember-qunit';

moduleForModel('teamstat', 'Unit | Model | teamstat', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
