const numberList = document.querySelectorAll(".greenbox");
const operatorList = document.querySelectorAll(".orangebox");
const otherList = document.querySelectorAll(".bluebox");
let mathOperators = ["+", "-", "%", "/", "*"];
const output = document.querySelector(".output");

let currentInput = "";
let currentOperator = "";
let previousInput = "";

const appendNumber = (number) => {
  currentInput += number;
  output.textContent = `${previousInput} ${currentOperator} ${currentInput}`;
};
const appendOperator = (operator) => {
  if (currentInput === "") return;
  if (previousInput !== "") {
    //hesapla
    calculate();
  }
  currentOperator = operator;
  previousInput = currentInput;
  currentInput = "";
  output.textContent = `${previousInput} ${currentOperator}`;
};

const calculate = () => {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOperator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "/":
      if(currentInput === "0" || previousInput === "0"){
        result  ="ERROR";
        break;
      }else{
        result = prev / current;
        break;
      }
    case "*":
      result = prev * current;
      break;
    case "%":
      result = prev % current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperator = "";
  previousInput = "";
  output.textContent = `${currentInput}`;
};
const clearOutput = () => {
  currentInput = "";
  previousInput = "";
  currentOperator = "";
  output.textContent = "";
};


for (let item of numberList) {
  item.addEventListener("click", appendNumber.bind(this, item.textContent));
}
for (let item of operatorList) {
  item.addEventListener("click", appendOperator.bind(this, item.textContent));
}
for (let item of otherList) {
  item.addEventListener("click", (e) => {
    if(e.target.textContent === "AC"){
      clearOutput();
    }
    if(e.target.textContent === "BACK"){
      if(currentInput !== ""  && output.textContent !== ""){
        currentInput = currentInput.substring(0,currentInput.length-1);
        output.textContent = output.textContent.substring(0, output.textContent.length-1);
      }
    }
  });
}
