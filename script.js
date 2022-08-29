let displayValue = 0;
let firstOperand = 0;
let secondOperand = 0;
let operation = "";

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

            if (n.target.innerHTML == ".") {
                document.getElementById("dot").disabled = true;
            }
            
            
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
        document.getElementById("dot").disabled = false;
        firstOperand = 0;
        secondOperand = 0;
    })
}

function handleOperatorStuff(operationStuff) {
    operation = operationStuff;
    changeDisplayValue(0);
    displayValue = 0;
    document.getElementById("dot").disabled = false;
}

function addEventListenerAtOperators(){
    const operators = document.querySelectorAll('.operator');
    operators.forEach(function(operator) {
        operator.addEventListener('click', function(o) {
            if (o.target.innerHTML == "=") {
                if (operation != "") {
                    secondOperand = displayValue;
                    /*console.log("second");
                    console.log(secondOperand);
                    if (secondOperand != 0) {
                        secondOperand = displayValue;
                        console.log("something")
                    }*/
                    let result = operate(operation, parseFloat(firstOperand), parseFloat(secondOperand));
                    changeDisplayValue(result);
                    displayValue = result;
                    firstOperand = result;
                    operation = "";
                    document.getElementById("dot").disabled = false;
                    secondOperand = 0;
                }
                
            } else {
                if (firstOperand == 0) {
                    firstOperand = displayValue;
                } else if (secondOperand == 0) {
                    secondOperand = displayValue;
                }
                switch (o.target.innerHTML) {
                    case "+":
                        handleOperatorStuff("add");
                    break;
                    case "-":
                        handleOperatorStuff("substract");
                        
                    break;
                    case "x":
                        handleOperatorStuff("multiply");
                        
                    break;
                    case "/":
                        handleOperatorStuff("divide");
                        
                    break;
                
                    default:
                        break;
                }
            }
            /*console.log("first");
            
            console.log(firstOperand);
            console.log("second");
            console.log(secondOperand);*/
        })
    })
}



getAllNumbers()
setClear()
addEventListenerAtOperators()
