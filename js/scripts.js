// Business Logic:
function beepBoop(number, name) {
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
  inputRange.forEach(function (element) {
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
  return outputRange;
}

// UI Logic:
$(document).ready(function () {
  $("#numberInput").submit(function (event) {
    event.preventDefault();
    const formInput = parseInt($("#inputNum").val());
    const formInputName = $("#inputName").val();
    const orderInput = $("#resultOrder").val();
    let resultArray = beepBoop(formInput, formInputName);
    if (
      formInput.toString() === "NaN" ||
      formInputName === "" ||
      orderInput === "orderNone"
    ) {
      $("#oops").show();
    } else {
      $("#oops").hide();
      $(".results").show();
      $(".col-md#imgDiv1").hide();
      $(".col-md#imgDiv2").hide();
      $(".col-md#imgDiv3").hide();
      if (formInput < 0) {
        $(".col-md#imgDiv1").slideDown("slow").fadeIn("slow");
      } else if (formInput > 0 && formInput < 50) {
        $(".col-md#imgDiv2").slideDown("slow").fadeIn("slow");
      } else {
        $(".col-md#imgDiv3").slideDown("slow").fadeIn("slow");
      }
      $(".list-group").empty();
      resultArray.forEach(function (element) {
        if (orderInput === "leastToGreatest") {
          $(".list-group").append(
            "<li class='list-group-item'>" + element + "</li>"
          );
        } else if (orderInput === "greatestToLeast") {
          $(".list-group").prepend(
            "<li class='list-group-item'>" + element + "</li>"
          );
        }
      });
    }
  });

  $("#clear").submit(function (event) {
    event.preventDefault();
    $(".results").hide();
    $(".list-group").empty();
  });
});