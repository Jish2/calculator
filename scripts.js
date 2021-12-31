let curDis = 0;
let currentNum = 0;
let firstInput = 0;
let secondInput = 0;

document.getElementById("display").innerHTML = curDis;

const secret = () => {
  if (document.getElementById("secret").style.display === "block") {
    document.getElementById("secret").style.display = "none";
  } else {
    document.getElementById("secret").style.display = "block";
  }
};

const add = (input1, input2) => {
  return input1 + input2;
};

const subtract = (input1, input2) => {
  return input1 - input2;
};

const multiply = (input1, input2) => {
  return input1 * input2;
};

const divide = (input1, input2) => {
  return input1 / input2;
};

const percent = (input) => {
  return input / 100;
};

const switchSign = (input) => {
  return input * -1;
};

const reset = () => {
  document.getElementById("display").innerHTML = 0;
  curDis = 0
    currentNum = 0
};

const one = () => {
  if (display === 0) {
      document.getElementById("display").innerHTML = 1;
      curDis = 1
      currentNum = 1
} else {
    console.log(document.getElementById("display").innerHTML + '1');
    curDis = currentNum.toString + '1'
    console.log(Number.parseInt(curDis,10)
};

const two = () => {
  document.getElementById("display").innerHTML = 2;
};

const three = () => {
  document.getElementById("display").innerHTML = 3;
};

const four = () => {
  document.getElementById("display").innerHTML = 4;
};

const five = () => {
  document.getElementById("display").innerHTML = 5;
};

const six = () => {
  document.getElementById("display").innerHTML = 6;
};

const seven = () => {
  document.getElementById("display").innerHTML = 7;
};

const eight = () => {
  document.getElementById("display").innerHTML = 8;
};

const nine = () => {
  document.getElementById("display").innerHTML = 9;
};

const zero = () => {
  document.getElementById("display").innerHTML = 0;
};
