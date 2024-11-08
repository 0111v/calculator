let toOperate = ''
let operator = ''
let display = ''
document.querySelector('.clear').addEventListener('click', () => {
  toOperate = ''
  operator = ''
  display = ''
  update()
})
document.querySelector('.erase').addEventListener('click', () => {
  display = display.substring(0, display.length - 1)
  update()
})

document.querySelector('.dot').addEventListener('click', () => {
  console.log(display)
  if (display.match(/[0-9]+\./)) {
    return;
  }

  display += '.'
  update()
})

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
  display += `${number}`
  document.querySelector('.display').innerHTML = display
}

function getOperator(signal) {
  if (display === '') {
    operator = signal
    update()
    return
  }
  toOperate = operate((parseFloat(toOperate || 0)), (parseFloat(display || 0)), operator)
  if (isNaN(toOperate)) {
    toOperate = ''
    operator = ''
    display = ''
    update()
    return
  }
  operator = signal
  display = ''
  update()
  
}

function operate(number1, number2, operator) {
  console.log('operating')
  console.log(number1)
  console.log(number2)

  if (number1 === '' && number2 === '') {
    console.log('hello')    
    return display = ''
  }

  // if (number1 === 0 || number2 === 0) {
  //   console.log('hello')    
  //   return display = ''
  // }

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
  if (isNaN(result)) {
    toOperate = ''
    operator = ''
    display = ''
    update()
    return
  }
  display = `${result}`
  toOperate = ''
  operator = ''
  update()
}