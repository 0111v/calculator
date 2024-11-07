let toOperate = ''
let operator = ''
let display = ''

function update() {
  document.querySelector('.display').innerHTML = display
  document.querySelector('.operator').innerHTML = operator
  document.querySelector('.to-operate').innerHTML = toOperate
}



function add (number1, number2) {
  return parseFloat(number1) + parseFloat(number2 )
}

function subtract (number1, number2) {
  return parseFloat(number1) - parseFloat(number2 )
}

function multiply (number1, number2) {
  return parseFloat(number1) * parseFloat(number2 )
}

function divide (number1, number2) {
  return parseFloat(number1) / parseFloat(number2 )
}

function addNumber(number) {
  display += number
  document.querySelector('.display').innerHTML = display
}

function getOperator(signal) {
  toOperate = operate((parseFloat(toOperate || 0)), (parseFloat(display || 0)), operator)
  operator = signal
  display = ''
  update()
  
}

function operate(number1, number2, operator) {
  if (!operator) {
    console.log('hello')
    return display
  }

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

function getResult() {
  const result = operate(toOperate, display, operator)
  display = result
  toOperate = ''
  operator = ''
  update()
}