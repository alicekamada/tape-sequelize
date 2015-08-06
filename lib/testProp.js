var testProp = function(assert, data, fieldName, type) {
  var testString = 'it should have a ' + type + ' field named `' + fieldName +'`';

  if (data[fieldName] && data[fieldName].type === type) {
    assert.pass(testString);
  } else {
    assert.fail(testString);
  }
};

module.exports = testProp;
