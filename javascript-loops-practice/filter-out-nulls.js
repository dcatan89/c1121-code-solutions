/* exported filterOutNulls */
function filterOutNulls(values) {
  var noNullFriends = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullFriends.push(values[i]);
    }
  }
  return noNullFriends;
}
