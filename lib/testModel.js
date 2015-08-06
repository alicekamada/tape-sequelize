var testProp = require('./testProp.js');

var testModel = R.curry(function(model, propList, assert) {

  assert.ok(model, "it should exist");

  model.describe().then(function(data) {
    var boundPropTest = R.curry(testProp)(assert, data);

    propList.forEach(R.apply(boundPropTest));

    assert.end();
  });
});

module.exports = testModel;
