/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStringsAttached = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof 'string') {
      noStringsAttached.push(values[i]);
    }
  }
  return noStringsAttached;
}
