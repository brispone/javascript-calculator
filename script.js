var currentValue = 0;
var currentDisplayValue = "0";
var currentOperator = "";
var currentWorkingValue = 0;
var previousOperator = "";
var equaled = false;
var previousWorkingValue = 0;

function removeZero() {
  if (window.currentDisplayValue === "0") {
    window.currentDisplayValue = "";
  }
}

function checkForEquals() {
  if (window.currentOperator === "=") {
    window.currentValue = 0;
    window.currentDisplayValue = "0";
    window.currentOperator = "";
    window.currentWorkingValue = 0;
  }
}

function displayCurrentValue() {
  if (window.currentDisplayValue.length > 13) {
    window.currentDisplayValue = "DISPLAY LIMIT";
    $("#display").html(window.currentDisplayValue);
    window.currentDisplayValue = "";
    window.currentOperator = "";
    window.currentValue = 0;
  } else $("#display").html(window.currentDisplayValue);
}

function performOperation() {
  if (window.equaled === true) {
    window.currentOperator = window.previousOperator;
    window.currentWorkingValue = window.previousWorkingValue;
  }

  if (window.currentOperator === "+") {
    window.currentValue += window.currentWorkingValue;
    window.currentDisplayValue = window.currentValue.toString();
  }
  if (window.currentOperator === "-") {
    window.currentValue -= window.currentWorkingValue;
    window.currentDisplayValue = window.currentValue.toString();
  }
  if (window.currentOperator === "*") {
    window.currentValue *= window.currentWorkingValue;
    window.currentDisplayValue = window.currentValue.toString();
  }
  if (window.currentOperator === "/") {
    window.currentValue /= window.currentWorkingValue;
    window.currentDisplayValue = window.currentValue.toString();
  }
}

function oneButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "1";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function twoButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "2";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function threeButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "3";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function fourButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "4";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function fiveButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "5";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function sixButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "6";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function sevenButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "7";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function eightButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "8";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function nineButton() {
  checkForEquals();
  removeZero();
  window.currentDisplayValue += "9";
  window.currentWorkingValue = parseFloat(window.currentDisplayValue);
  displayCurrentValue();
}

function zeroButton() {
  checkForEquals();
  if (window.currentDisplayValue != "0") {
    window.currentDisplayValue += "0";
    window.currentWorkingValue = parseFloat(window.currentDisplayValue);
    displayCurrentValue();
  }
}

function dotButton() {
  checkForEquals();
  if (window.currentDisplayValue.indexOf(".") === -1) {
    if (window.currentDisplayValue === "0" || window.currentDisplayValue === "") {
      window.currentDisplayValue = "0";
    }
    window.currentDisplayValue += ".";
    window.currentWorkingValue = parseFloat(window.currentDisplayValue);
    displayCurrentValue();
  }
}

function plusButton() {
  //window.currentWorkingValue = 0;
  window.equaled = false;
  performOperation();
  if (window.currentDisplayValue != "") {
    window.currentValue = parseFloat(window.currentDisplayValue);
  }
  window.currentDisplayValue = "";
  $("#display").html("+");
  window.currentOperator = "+";
}

function minusButton() {
  //window.currentWorkingValue = 0;
  window.equaled = false;
  performOperation();
  if (window.currentDisplayValue != "") {
    window.currentValue = parseFloat(window.currentDisplayValue);
  }
  window.currentDisplayValue = "";
  $("#display").html("-");
  window.currentOperator = "-";
}

function timesButton() {
  //window.currentWorkingValue = 0;
  window.equaled = false;
  performOperation();
  if (window.currentDisplayValue != "") {
    window.currentValue = parseFloat(window.currentDisplayValue);
  }
  window.currentDisplayValue = "";
  $("#display").html("*");
  window.currentOperator = "*";
}

function divideButton() {
  //window.currentWorkingValue = 0;
  window.equaled = false;
  performOperation();
  if (window.currentDisplayValue != "") {
    window.currentValue = parseFloat(window.currentDisplayValue);
  }
  window.currentDisplayValue = "";
  $("#display").html("/");
  window.currentOperator = "/";
}

function clearAllButton() {
  window.currentValue = 0;
  window.currentDisplayValue = "0";
  window.currentOperator = "";
  window.currentWorkingValue = 0;
  window.previousOperator = "";
  window.equaled = false;
  window.previousWorkingValue = 0;
  $("#display").html(0);
}

function clearEntryButton() {
  window.currentDisplayValue = "0";
  window.currentWorkingValue = 0;
  $("#display").html("0");
}

function equalsButton() {
  performOperation();
  if (window.currentOperator !== "=" && window.currentOperator !== "") {
    window.previousOperator = window.currentOperator;
    window.previousWorkingValue = window.currentWorkingValue;
  }
  window.currentOperator = "=";
  if (window.currentValue.toString().length > 13) {
    $("#display").html("DISPLAY LIMIT");
    window.currentDisplayValue = "";
    window.currentOperator = "";
    window.currentValue = 0;
  }
  if (window.currentOperator === "") {
    return;
  } else $("#display").html(window.currentValue);
  window.currentDisplayValue = "";
  window.currentWorkingValue = 0;
  window.equaled = true;
}