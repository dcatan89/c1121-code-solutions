/* exported toObject */
/* make a storage space
  - check to see if there are a pair of values
  -Check the the list by twos and let the second  of the pair become, the value.
  -The first value will become the key as a result and store both the key and value within a storage. d
  -store the output then return the storage
  */

function toObject(keyValuePair) {
  var pairs = { };
  for (var i = 0; i < keyValuePair.length; i += 2) {
    pairs[keyValuePair[i]] = keyValuePair[i + 1];
  }

  return pairs;
}
