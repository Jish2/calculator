let display = 0;
let firstInput = 0;
let secondInput = 0;

document.getElementById("display").innerHTML = display;

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
  console.log("pressed AC");
  document.getElementById("display").innerHTML = 0;
};

const one = () => {
  document.getElementsByClassName("display").innerHTML = 1;
};

const two = () => {
  document.getElementsByClassName("display").innerHTML = 2;
};

const three = () => {
  document.getElementsByClassName("display").innerHTML = 3;
};

const four = () => {
  document.getElementsByClassName("display").innerHTML = 4;
};

const five = () => {
  document.getElementsByClassName("display").innerHTML = 5;
};

const six = () => {
  document.getElementsByClassName("display").innerHTML = 6;
};

const seven = () => {
  document.getElementsByClassName("display").innerHTML = 7;
};

const eight = () => {
  document.getElementsByClassName("display").innerHTML = 8;
};

const nine = () => {
  document.getElementsByClassName("display").innerHTML = 9;
};

const zero = () => {
  document.getElementsByClassName("display").innerHTML = 0;
};
