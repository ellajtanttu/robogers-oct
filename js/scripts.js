// Business Logic:
function beepBoop(number) {
  const inputNumber = number;
  let inputRange = [];
  let outputRange = [];
  if (inputNumber.toString().includes("-")) {
    for (let i = inputNumber; i < 1; i++) {
      inputRange.push(i);
    }
  }
  for (let i = 0; i < inputNumber + 1; i++) {
    inputRange.push(i);
  }
  inputRange.forEach(function(element) {
    const stringElement = element.toString();
    if (stringElement.includes("3")) {
      outputRange.push("Won't you be my neighbor?");
    } else if (stringElement.includes("2")) {
      outputRange.push("Boop!");
    } else if (stringElement.includes("1")) {
      outputRange.push("Beep!");
    } else {
      outputRange.push(element);
    }
  });
  console.log(outputRange);
  return outputRange;
};

// UI Logic:
