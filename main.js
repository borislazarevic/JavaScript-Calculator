/**** Initialization  ****/

const displayElement = document.querySelector(".displayElement");
const displayResult = document.querySelector(".displayResult");
const clearAll = document.querySelector(".clearAll");
const backspace = document.querySelector(".backspace");
const equal = document.querySelector(".equal");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");

let inputEl1 = "";
let inputEl2 = "";
let result = null;
let mathOperation = "";
let isDot = false;
displayElement.value = "0";
displayResult.value = "0";

displayElement.disabled = true;
displayResult.disabled = true;

/**** Adding numbers to displayElement ****/

number.forEach(num => {
  num.addEventListener("click", e => {
    if (e.target.value === "." && !isDot) {
      isDot = true;
    } else if (e.target.value === "." && isDot) {
      return;
    }

    inputEl1 += e.target.value;
    displayElement.value = inputEl1;
  });
});

/**** Operations and Calculation ****/

operation.forEach(op => {
  op.addEventListener("click", e => {
    if (!inputEl1) return;
    isDot = false;
    const operationName = e.target.value;
    if (inputEl1 && inputEl2 && mathOperation) {
      calculation();
    } else {
      result = parseFloat(inputEl1);
    }

    displayCalculationInput(operationName);
    mathOperation = operationName;
  });
});

function calculation() {
  switch (mathOperation) {
    case "×":
      result = parseFloat(result) * parseFloat(inputEl1);
      break;
    case "+":
      result = parseFloat(result) + parseFloat(inputEl1);
      break;
    case "-":
      result = parseFloat(result) - parseFloat(inputEl1);
      break;
    case "÷":
      result = parseFloat(result) / parseFloat(inputEl1);
      break;
    default:
      return;
  }
}

function displayCalculationInput(name = "") {
  inputEl2 += inputEl1 + name;
  displayElement.value = inputEl2;
  displayResult.value = "";
  inputEl1 = "";
}

equal.addEventListener("click", e => {
  if (!inputEl1) return;
  isDot = false;
  calculation();
  displayCalculationInput();
  displayElement.value = inputEl2;
  inputEl1 = result.toFixed(2).replace(/\.00$/, "");
  displayResult.value = inputEl1;
  inputEl2 = "";
});

/**** Clear All Button ****/

clearAll.addEventListener("click", e => {
  displayElement.value = "0";
  displayResult.value = "0";
  inputEl1 = "";
  inputEl2 = "";
});

/**** Backspace ****/
backspace.addEventListener("click", e => {
  if (!inputEl1) return;
  inputEl1 = displayElement.value.slice(0, -1);
  displayElement.value = inputEl1;
  displayResult.value = inputEl2;
  inputEl2 = "";
});

/**** Keyboard ****/

window.addEventListener("keydown", e => {
  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
      numberClick(e.key);
      break;
    case "+":
    case "-":
      operationClick(e.key);
      break;
    case "*":
      operationClick("×");
      break;
    case "/":
      operationClick("÷");
      break;
    case "=":
      eqaulClick(e.key);
      break;
    case "Enter":
      eqaulClick(e.key);
      break;
    case "Backspace":
      backspaceClick(e.key);
      break;
    case "Delete":
      clearAllClick(e.key);
      break;
  }
});

function numberClick(key) {
  number.forEach(num => {
    if (num.value === key) {
      num.click();
    }
  });
}

function operationClick(key) {
  operation.forEach(op => {
    if (op.value === key) {
      op.click();
    }
  });
}

function eqaulClick(key) {
  equal.click();
}

function backspaceClick(key) {
  backspace.click();
}

function clearAllClick(key) {
  clearAll.click();
}
