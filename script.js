let displayValue = 0;

function add(number1, number2) {
    return number1 + number2
}

function substract(number1, number2) {
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    return number1 / number2
}

function operate(operator, number1, number2) {
    switch (operator) {
        case 'add':
            return add(number1,number2);
            break;
        case 'substract':
            return substract(number1,number2);
            break;
        case 'multiply':
            return multiply(number1,number2);
            break;
        case 'divide':
            return divide(number1,number2);
            break;
    
        default:
            break;
    }
}

function getAllNumbers() {
    const numbers = document.querySelectorAll(".number");

    numbers.forEach(function(number) {
        number.addEventListener('click', function(n) {
            if(displayValue == 0) {
                displayValue = n.target.innerHTML;
            } else {
                displayValue += n.target.innerHTML;
            }
            
            changeDisplayValue(displayValue);
            
            
        });
    }
    )
}

function changeDisplayValue(number) {
    const display = document.querySelector('#display');
    display.textContent = number;
}

function setClear() {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click',function() {
        changeDisplayValue(0);
        displayValue = 0;
    })
}

function addEventListenerAtOperators(){
    const operators = document.querySelectorAll('.operator');
    operators.forEach(function(operator) {
        operator.addEventListener('click', function(o) {
            if (o.target.innerHTML == "=") {
                alert("=");
            }
        })
    })
}
getAllNumbers()
setClear()
addEventListenerAtOperators()