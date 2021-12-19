/* exported omit */

function omit(source, key) {
  var objectOutput = {};
  for (var prop in source) {
    for (var i = 0; i <= key.length; i++) {
      if (prop !== key[i]) {
        objectOutput[prop] = source[prop];
      } else { delete objectOutput[key[i]]; }
    }
  }

  return objectOutput;

}
