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

/**** Operations ****/

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
    console.log(result);
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
