let number1
let number2
let currentOperator
let displayNumber = ''

function add (number1, number2) {
  return parseFloat(number1) + parseFloat(number2 )
}

function subtract (number1, number2) {
  return number1 - number2
}

function multiply (number1, number2) {
  return number1 * number2
}

function divide (number1, number2) {
  return number1 / number2
}

function operate(number1, number2, operator) {
  if (operator === '+') {
    return add(number1, number2)
  }

  if (operator === '-') {
    return subtract(number1, number2)
  }

  if (operator === '*') {
    return multiply(number1, number2)
  }

  if (operator === '/') {
    return divide(number1, number2) 
  }
}

function addNumber (number) {
  displayNumber += number
  console.log(displayNumber)
}

function getOperator(operator) {
  number1 = displayNumber
  currentOperator = operator
  displayNumber = ''
  console.log(number1)
  console.log(operator)
}

function getResult() {
  number2 = displayNumber
  const result = operate(number1, number2, currentOperator)
  console.log(result)
}

