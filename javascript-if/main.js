/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
}

function isEven(number) {
  if (number % 2) {
    return true;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
}

function isOldEnoughToDrink(person) {
  if (person >= 21) {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person >= 16) {
    return true;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  if (person !== 0) { return false; }

}

function categorizeAcidity(pH) {

  if (pH >= 0 < 7) {
    return 'acid';
  } else if (pH > 7 <= 14) {
    return 'base';
  } else if (pH === 7) {
    return 'neutral';
  } else { return 'invalid pH level'; }
}

function introduceWarnerBro(name) {
  if ((name === 'wakko') || (name === 'yakoo')) {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm Cute!~";
  } else { return 'Goodnight everybody!'; }
}
