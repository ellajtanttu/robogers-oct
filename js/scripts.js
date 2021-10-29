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

    const formInput = parseInt($("#inputNum").val());
    const formInputName = $("#inputName").val();
    console.log("formInput = " + formInput);

    const orderInput = $("#resultOrder").val();
    console.log("orderInput = " + orderInput);
  
    let resultArray = [];
    resultArray = beepBoop(formInput, formInputName);
    console.log("resultArray = " + resultArray);

    $(".results").show();
    $(".col-md#imgDiv").show();
    $(".list-group").empty();


    resultArray.forEach(function(element) {
      if (orderInput === "leastToGreatest") {
        $(".list-group").append("<li class='list-group-item'>" + element + "</li>");
      } else {
        $(".list-group").prepend("<li class='list-group-item'>" + element + "</li>");
      };
    
    });


    // $("#defaultOrder").click(function() {
    //   $(".list-group").empty();
    //   console.log("list group emptied")
    //   resultArray.forEach(function(element) {
    //     $(".list-group").append("<li class='list-group-item'>" + element + "</li>");
    //     console.log("item appended")

    //   });
    // });
    // $("b#ReverseOrder").click(function() {
    //   $(".list-group").empty();
    //   console.log("list group emptied")
    //   resultArray.forEach(function(element) {
    //     $(".list-group").prepend("<li class='list-group-item'>" + element + "</li>");
    //     console.log("item prepended")
    //   });
    // });


  });
  $("#clear").submit(function(event) {
    event.preventDefault();
    $(".results").hide();
    $(".list-group").empty();
  });

});