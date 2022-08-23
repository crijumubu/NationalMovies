let display = document.getElementById('display');

let listNumberButtons = document.getElementsByClassName('numbers');
let listOperationsButtons = document.getElementsByClassName('operations');

let afterOperand = false;

let firstNumber = 0;
let secondNumber = 0;
let currentOperation = -1;

for (let i = 0 ; i < listNumberButtons.length; i++){
    listNumberButtons[i].addEventListener('click', function () {

        if (display.innerText.charAt(0) == '0' && display.innerText.length == 1) {
            display.innerHTML = '';
        }

        if (afterOperand){
            display.innerHTML = listNumberButtons[i].textContent;
            afterOperand = false;
        }else{
            display.innerHTML += listNumberButtons[i].textContent;
        }
    });
}

for (let i = 0 ; i < listOperationsButtons.length; i++){
    listOperationsButtons[i].addEventListener('click', function () {

        switch (listOperationsButtons[i].id){

            case 'percentage':
                firstNumber = parseFloat(display.innerText);
                display.innerHTML = (firstNumber / 100).toString();
                break;

            case 'square root':
                firstNumber = parseFloat(display.innerText);
                display.innerHTML = (firstNumber ** 0.5).toString();
                break;

            case 'power':
                firstNumber = parseFloat(display.innerText);
                display.innerHTML = (firstNumber ** 2).toString();
                break;

            case 'fraction':
                firstNumber = parseFloat(display.innerText);
                display.innerHTML = (1 / firstNumber).toFixed(10).toString();
                break;

            case 'clearEntry':
                firstNumber = parseFloat(display.innerText);
                display.innerHTML = '0'.toString();
                secondNumber = 0;
                break;

            case 'clear':
                display.innerHTML = '0'.toString();
                firstNumber = 0;
                secondNumber = 0;
                currentOperation = -1;
                break;

            case 'delete':
                let lengthNumber = display.innerText.length;
                if (lengthNumber == 1){
                    display.innerHTML = '0';
                }
                else if (lengthNumber > 1){
                    display.innerHTML = display.innerText.slice(0, -1);
                }
                break;

            case 'divide': //Operation 1
                if (firstNumber == 0){
                    firstNumber = parseFloat(display.innerText);
                }else{
                    secondNumber = parseFloat(display.innerText);
                }

                if (secondNumber != 0 && firstNumber != 0){
                    let result = calculator(currentOperation);
                    display.innerHTML = result.toString();
                    firstNumber = result;
                }

                currentOperation = 1;
                afterOperand = true;
                break;

            case 'multiply': //Operation 2
                if (firstNumber == 0){
                    firstNumber = parseFloat(display.innerText);
                }else{
                    secondNumber = parseFloat(display.innerText);
                }

                if (secondNumber != 0 && firstNumber != 0){
                    let result = calculator(currentOperation);
                    display.innerHTML = result.toString();
                    firstNumber = result;
                }

                currentOperation = 2;
                afterOperand = true;
                break;

            case 'subtract': //Operation 3
                if (display.innerText == '0' || afterOperand && secondNumber == 0 && currentOperation == 3){
                    display.innerHTML = '-';
                    afterOperand = false;
                }else{

                    if (firstNumber == 0){
                        firstNumber = parseFloat(display.innerText);
                    }else{
                        secondNumber = parseFloat(display.innerText);
                    }

                    if (secondNumber != 0 && firstNumber != 0){
                        let result = calculator(currentOperation);
                        console.log(firstNumber + ' ' + secondNumber)
                        display.innerHTML = result.toString();
                        firstNumber = result;
                    }

                    currentOperation = 3;
                    afterOperand = true;
                }
                break;

            case 'add': //Operation 4
                if (firstNumber == 0){
                    firstNumber = parseFloat(display.innerText);
                }else{
                    secondNumber = parseFloat(display.innerText);
                }

                if (secondNumber != 0 && firstNumber != 0){
                    let result = calculator(currentOperation);
                    display.innerHTML = result.toString();
                    firstNumber = result;
                }

                currentOperation = 4;
                afterOperand = true;
                break;

            case 'changeSign':
                display.innerHTML = (firstNumber * -1).toString();
                break;

            case 'decimal':
                display.innerHTML += '.';
                afterOperand = false;
                break;

            case 'equal':
                if (!afterOperand){
                    secondNumber = parseFloat(display.innerText);
                    display.innerHTML = calculator(currentOperation).toString();
                    afterOperand = true;
                    firstNumber = 0;
                    secondNumber = 0;
                }
                break;
        }
    });
}

function calculator(){

    let result = 0;

    switch (currentOperation){
        case 1:
            result = firstNumber / secondNumber;
            break;
        case 2:
            result = firstNumber * secondNumber;
            break;
        case 3:
            result = firstNumber - secondNumber;
            break;
        case 4:
            result = firstNumber + secondNumber;
            break;
    }

    return result;
}