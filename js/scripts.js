// Business Logic:
function beepBoop(number) {
  const inputNumber = number;
  let inputRange = [];
  let outputRange = [];
  for (let i = 0; i < inputNumber + 1; i++) {
    inputRange.push(i);
  }
  inputRange.forEach(function(element) {
    const stringElement = element.toString();
    if (stringElement.includes("3")) {
      outputRange.push("Won't you be my neighbor?");
    } else if (element === 2) {
      outputRange.push("Boop!");
    } else if (element === 1) {
      outputRange.push("Beep!");
    } else {
      outputRange.push(element);
    }
  });
  console.log(outputRange);
  return outputRange;
};

// UI Logic:
