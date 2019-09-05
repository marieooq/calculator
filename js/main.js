const result = document.getElementById("result");
let operator = "";
let previousValue = 0;
let checkFlag = false;

const showInput = elm => {
  if (checkFlag) {
    clearInput();
  }
  result.value += elm.value;
};

// clear result
const clearInput = () => {
  result.value = "";
};

//add
const addInput = elm => {
  operator = "+";
  previousValue = result.value;
  clearInput();
};

//substract
const substractInput = elm => {
  operator = "-";
  previousValue = result.value;
  clearInput();
};

//multi
const multipleInput = elm => {
  operator = "*";
  previousValue = result.value;
  clearInput();
};

//divide
const divideInput = elm => {
  operator = "/";
  previousValue = result.value;
  clearInput();
};

//check operator
const checkOperator = () => {
  let previous = parseFloat(previousValue);
  let current = parseFloat(result.value);
  if (operator == "+") {
    result.value = previous + current;
    operator = "";
    previous = 0;
    current = 0;
    checkFlag = true;
  } else if (operator == "-") {
    result.value = previous - current;
    operator = "";
    previous = 0;
    current = 0;
    checkFlag = true;
  } else if (operator == "*") {
    result.value = previous * current;
    operator = "";
    previous = 0;
    current = 0;
    checkFlag = true;
  } else if (operator == "/") {
    result.value = previous / current;
    operator = "";
    previous = 0;
    current = 0;
    checkFlag = true;
  }
};
