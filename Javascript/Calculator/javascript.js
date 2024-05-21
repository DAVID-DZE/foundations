let currentOperand = '';
let previousOperand = '';
let currentOperator = null;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

function calculate() {
    let result;
    const a = parseFloat(previousOperand);
    const b = parseFloat(currentOperand);

    switch (currentOperator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            return;
    }

    if (result.toString().length > 8) {
        if (Number.isInteger(result)) {
            result = result.toExponential(3);
        } else {
            result = parseFloat(result.toFixed(5));
        }
    }

    previousOperand = '';

    currentOperand = result.toString();
    screen.textContent = currentOperand;
}

const screen = document.getElementById("calculatorScreen");
const buttons = document.querySelectorAll('#calculatorButtons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.className === "clear") {
            currentOperand = '';
            previousOperand = '';
            currentOperator = null;
        }
        else if(button.className === 'operator' && currentOperand) {
            currentOperator = button.value;
            previousOperand = currentOperand;
            currentOperand = '';
        }
        else if(button.className === 'equals' && currentOperand && previousOperand) {
            calculate();
        }
        else if(button.className === 'backspace') {
            currentOperand = currentOperand.slice(0, -1);
        }
        else if(currentOperand.length < 8) {
            if(button.className === 'operand') {
                currentOperand += button.value;
            }
            else if(button.className === 'sign') {
                currentOperand = (parseFloat(currentOperand) * -1).toString();
            }
            else if(button.className === 'percent') {
                currentOperand = (parseFloat(currentOperand) / 100).toString();
            }
            else if(button.className === 'decimal') {
                if(!currentOperand.includes('.')) {
                    currentOperand += button.value;
                }
            }
        }

        if(!currentOperand) {
            screen.textContent = '0';
        } else {
            screen.textContent = currentOperand;
        }
    });
});