import { test, moduleFor } from 'ember-qunit';

moduleFor('route:index', 'IndexRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('has default bind', function() {
  var route = this.subject();
  var model = route.model();
  equal(model.myBind, "Default text!");
});
