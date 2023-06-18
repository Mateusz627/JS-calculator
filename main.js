const currentNumber = document.querySelector('.currentNumber')

const previousNumber = document.querySelector('.previousNumber p')

const mathSign = document.querySelector('.mathSign')

const numbersButtons = document.querySelector('.number')

const operatorsButtons = document.querySelectorAll('.operator')

const equalsButton = document.querySelector('.equals')

const clearButton = document.querySelector('.clear')

const calculatorHistory = document.querySelector('.history')

const historyBtn = document.querySelector('.history-btn')

let result = ''


function displayNumbers() {

}

function showResult() {

}

function operate() {

}

function clearScreen() {

}

function clearHistory() {

}




// Nasluchiwanie przyciskow

operatorsButtons.forEach((button) => button.addEventListener('click', operate))

equalsButton.addEventListener('click', showResult)

clearButton.addEventListener('click', clearScreen)

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

historyBtn.addEventListener('click', clearHistory)