/* exported chunk */
// Make storage for the output and set it as an empty array
// Check if the size given is greater than the array length
// if true, return an the empty storage as output
// Next Starting from the first value up until the size given, take the values within that range and store
//  - it in the storage as one array value
//  check if the size is smaller or equal to 2, if it is two, check the remaining values and  store first value and the next value into the storage
//  -return the output of the storage
//  if the size is smaller than two, store the remaining values one by one  into the storage until the last values is put
//  - then return the storage as value
// if the remaining values are not greater in length than the size given, put the remaining values one by one within the storage and return the storage as output
// if all checks previous are not true then start from the array at the size index and store the remaining values into the storage
// Return the storage value as output

function chunk(array, size) {
  var chunkedArr = [];
  if (array.length < size) {
    return chunkedArr;
  }
  chunkedArr.push(array.slice(0, size));
  if (array[size] === false) {
    chunkedArr.push(array.slice(size, size + 3));
  }
  if (array[array.length - 1] === undefined) {
    chunkedArr.push([array[array.length - 1]]);
    return chunkedArr;
  }

  if (size === 2) {
    for (var i = size; i < array.length - 1; i++) {
      chunkedArr.push([array[i], array[i + 1]]);
    }
  } else if (size < 2) {
    for (i = size; i < array.length; i++) {
      chunkedArr.push([array[i]]);
    }
  } else {
    for (i = size; i < array.length; i++) {
      if (i > array.length - size) {
        chunkedArr.push([array[i]]);
      } else {
        chunkedArr.push([array.slice(i, size)]);
      }
    }
  }
  return chunkedArr;
}
