// Business Logic:
function beepBoop(number,name) {
  const inputNumber = number;
  const inputName = name;
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
      outputRange.push("Won't you be my neighbor, " + inputName + " ?");
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
$(document).ready(function() {
  $("#numberInput").submit(function(event) {
    event.preventDefault();
    $(".results").show();
    $(".list-group").empty()

    const formInput = parseInt($("#inputNum").val());
    let resultArray = [];
    console.log("formInput = " + formInput);
    resultArray = beepBoop(formInput);
    console.log("resultArray = " + resultArray);
    resultArray.forEach(function(element) {
      $(".list-group").append("<li class='list-group-item'>" + element + "</li>");
    });

  });
  $("#clear").submit(function(event) {
    event.preventDefault();
    $(".list-group").empty();
  });
});