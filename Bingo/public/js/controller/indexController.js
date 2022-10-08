export class indexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.start();
    }
    start() {
        this.generateRandomsTable();
        this.view.displayTableNumbers(this.model.generatedSequence);
        this.addEventsButtons();
        this.generateRandomsWinner();
    }
    generateRandomsTable() {
        for (let i = 0; i < 25; i++) {
            let obj;
            if (i != 12) {
                obj = { letter: (i % 5), value: Math.floor(Math.random() * 100) };
            }
            else {
                obj = { letter: (i % 5), value: -1 };
            }
            this.model.generatedSequence = obj;
        }
    }
    addEventsButtons() {
        let divContents = this.view.getElements('content');
        for (let i = 0; i < divContents.length; i++) {
            divContents[i].addEventListener('click', () => {
                if (divContents[i].className == 'content clicked') {
                    this.view.changeColorDiv(divContents[i], false);
                    this.view.removeElementClass(divContents[i], 'clicked');
                }
                else {
                    this.view.addElementClass(divContents[i], 'clicked');
                    this.view.changeColorDiv(divContents[i], true);
                }
            });
        }
        let bingo = this.view.getElement('btnBingo');
        bingo.addEventListener('click', () => {
            let marked = 0;
            for (let i = 0; i < 5; i++) {
                let letterList = this.model.generatedSequence[i];
                for (let j = 0; j < letterList.length; j++) {
                    if (this.model.iterativeSequence[i].includes(letterList[j])) {
                        marked++;
                    }
                    else {
                    }
                }
            }
            if (marked == 24) {
                this.model.bingo = true;
                alert("Felicitaciones, lo haz logrado! ");
            }
            else {
                alert("Upss! Aún no has completado tu cartón, sigue a la espera!");
            }
        });
    }
    validation(obj) {
        let letter = obj.letter;
        for (let i = 0; i < this.model.iterativeSequence[letter].length; i++) {
            if (this.model.iterativeSequence[letter].includes(obj.value)) {
                return true;
            }
        }
        return false;
    }
    generateRandomsWinner() {
        let cont = 1;
        let transitionTimer = setInterval(() => {
            let obj;
            do {
                obj = { letter: Math.floor(Math.random() * 5), value: Math.floor(Math.random() * 100) };
            } while (this.validation(obj));
            this.model.iterativeSequence = obj;
            this.view.addNewSquare(obj);
            if (this.model.bingo || cont == 500) {
                clearInterval(transitionTimer);
            }
            cont++;
        }, 2500);
    }
}
