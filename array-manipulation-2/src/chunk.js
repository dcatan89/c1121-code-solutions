/* exported chunk */
function chunk(array, count) {
  const perGroup = Math.ceil(arr.length / numGroups);
  var b = newArr(count)
    .fill('')
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}
