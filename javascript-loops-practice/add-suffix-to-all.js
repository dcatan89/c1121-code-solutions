/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var addedSuffix = [];

  for (var i = 0; i < words.length; i++) {

    addedSuffix.push(words[i] + suffix);
  }
  return addedSuffix;
}
