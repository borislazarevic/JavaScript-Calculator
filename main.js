/**** Initialization  ****/
const displayElement = document.querySelector(".displayElement");
const displayResult = document.querySelector(".displayResult");
const clearAll = document.querySelector(".clearAll");
const backspace = document.querySelector(".backspace");
const equal = document.querySelector(".equal");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");

let inputEl = "";
let dot = false;

/**** Adding numbers to displayElement ****/

number.forEach(num => {
  num.addEventListener("click", e => {
    if (e.target.value === "." && !dot) {
      dot = true;
    } else if (e.target.value === "." && dot) {
      return;
    }
    console.log(e.target.value);
    inputEl = e.target.value;
    displayElement.value += inputEl;
  });
});
