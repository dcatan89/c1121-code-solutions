/* exported oddOrEven */
function oddOrEven(numbers) {
  var whatAreTheOdds = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      whatAreTheOdds.push('even');
    } else {
      whatAreTheOdds.push('odd');
    }
  }
  return whatAreTheOdds;
}
