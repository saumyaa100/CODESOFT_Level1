let display = document.getElementById('display');
let currentInput = '';
let operation = '';
let firstOperand = null;
let secondOperand = null;
let resultShown = false;

function appendNumber(number) {
    if (resultShown) {
        clearDisplay();
    }
    currentInput += number;
    display.innerText += number;
}

function setOperation(op) {
    if (currentInput === '') 
        return;

    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operation = op;
        currentInput = '';
        display.innerText += ' ' + operation + ' ';
    } else {
        secondOperand = parseFloat(currentInput);
        calculate(false);
        operation = op;
        currentInput = '';
        display.innerText += ' ' + operation + ' ';
    }
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    operation = '';
    display.innerText = '';
    resultShown = false;
}

function calculate(showResult = true) {
    if (currentInput === '') 
        return;

    secondOperand = parseFloat(currentInput);

    let result;
    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    if (showResult) {
        display.innerText += ' = ' + result;
        resultShown = true;
    } else {
        display.innerText = result;
    }

    currentInput = '';
    firstOperand = result;
    secondOperand = null;
    operation = '';
}