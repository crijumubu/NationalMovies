export class indexView {
    constructor() {
        this.getElement = (selector) => document.getElementsByClassName(selector)[0];
        this.getElements = (selector) => document.getElementsByClassName(selector);
    }
    addElementClass(element, classElement) { element.classList.add(classElement); }
    removeElementClass(element, classElement) { element.classList.add(classElement); }
    displayTableNumbers(objs) {
        let divContents = this.getElements('content');
        let letterCount = 0;
        let valueCount = 0;
        for (let i = 0; i < 24; i++) {
            if (letterCount == 5) {
                letterCount = 0;
                valueCount++;
            }
            if (objs[letterCount][valueCount] == -1) {
                letterCount++;
            }
            divContents[i].innerHTML = objs[letterCount][valueCount];
            letterCount++;
        }
    }
    changeColorDiv(element, whiteToGrey) {
        if (whiteToGrey) {
            element.style.background = '#E6E6E6';
        }
        else {
            element.style.background = 'white';
        }
    }
    addNewSquare(newOnSequence) {
        let pSequence = this.getElement('pSequence');
        let letter = '';
        let value = '';
        switch (newOnSequence.letter) {
            case (0):
                letter = 'B';
                break;
            case (1):
                letter = 'I';
                break;
            case (2):
                letter = 'N';
                break;
            case (3):
                letter = 'G';
                break;
            case (4):
                letter = 'O';
                break;
        }
        if (pSequence.textContent != '') {
            value = " | Letter: " + letter + ", value: " + newOnSequence.value;
        }
        else {
            value = "Letter: " + letter + ", value: " + newOnSequence.value;
        }
        pSequence.innerHTML += value;
    }
}
