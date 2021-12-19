/* exported invert */
function invert(source) {
  var inverted = {};
  if (source === '') {
    return inverted;
  }
  for (var prop in source) {
    inverted[source[prop]] = prop;
  }
  return inverted;
}
