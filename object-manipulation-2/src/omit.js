/* exported omit */

function omit(source, key) {
  var objectOutput = {};
  for (var prop in source) {
    for (var i = 0; i <= key.length; i++) {
      if (prop === key[i]) {
        delete objectOutput[key[i]];
      }
    }
}