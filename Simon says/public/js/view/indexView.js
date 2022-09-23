export class indexView {
    constructor() {
        this.getElement = (selector) => document.getElementsByClassName(selector)[0];
        this._display = this.getElement('modal');
    }
    set display(display) {
        this._display = display;
    }
    get display() {
        return this._display;
    }
    addToDisplayString(content) {
        this._display.innerHTML += `${content}`;
    }
    addToDisplayElement(content) {
        this._display.appendChild(content);
    }
    displayModal(display) {
        this._display = this.getElement('modal');
        this._display.style.display = display;
    }
    addToModalHeader(title, options) {
        this._display = this.getElement('modal-content');
        this._display.innerHTML = "";
        if (options) {
            this.addToDisplayString(`<div class="modalcontrolOptions"> <span class="close">&times;</span> </div>`);
        }
        this.addToDisplayString(` <h1 class='modalTitle'>${title}</h1> <div class='modalInformation'> </div>`);
    }
    addToModalLevels() {
        const levels = ['Easy', 'Intermediate', 'Hard'];
        this.addToModalHeader('Levels', true);
        this._display = document.getElementsByClassName('modalInformation')[0];
        for (let i = 0; i < levels.length; i++) {
            const levelBtn = document.createElement("button");
            levelBtn.className = 'btn levelBtn';
            levelBtn.innerHTML += `${levels[i]}`;
            this.addToDisplayElement(levelBtn);
        }
    }
    addToModalScore(scores) {
        this.addToModalHeader('Score', true);
        this._display = document.getElementsByClassName('modalInformation')[0];
        if (scores.length != 0) {
            this.addToDisplayString(`<h2 class='scoreSubheader'>Name</h2> <h2 class='scoreSubheader'>Level</h2> <h2 class='scoreSubheader'>Result</h2>`);
            for (let i = 0; i < 10; i++) {
                if (i != scores.length) {
                    this.addToDisplayString(`<p class='scoreContent'>${scores[i].name} </p> <p class='scoreContent'>${scores[i].level} </p> <p class='scoreContent'>${scores[i].score} </p>`);
                }
                else {
                    break;
                }
            }
        }
        else {
            this.addToDisplayString(`<p class='scoreContent noScore'>There are no available scores yet, play now!<p>`);
        }
    }
    addToModalNewScore() {
        this.addToModalHeader('Game over', false);
        this._display = document.getElementsByClassName('modalInformation')[0];
        this._display.innerHTML = "";
        this.addToDisplayString(`<form> <label class='labelName' for='name'>Input your name:</label> <input type='text' id='name' class='name' name='name' required> <input type='submit' class='btn submit last' value='Submit'> </form>`);
    }
    get simonButtons() {
        return document.getElementsByClassName('sbtn');
    }
    blinkButton(letter, button, originalToToggle) {
        let colors = [{ letter: 'B', color: ['rgb(37, 37, 214)', 'rgb(0, 0, 255)'] }, { letter: 'G', color: ['rgb(40, 198, 40)', 'rgb(0, 255, 0)'] }, { letter: 'R', color: ['rgb(188, 31, 31)', 'rgb(255, 0, 0)'] }, { letter: 'Y', color: ['rgb(190, 190, 33)', 'rgb(255, 255, 0)'] }];
        for (let i = 0; i < colors.length; i++) {
            if (colors[i].letter == letter) {
                if (originalToToggle) {
                    button.style.background = colors[i].color[1];
                }
                else {
                    button.style.background = colors[i].color[0];
                }
            }
        }
    }
    roundCounter(indicator) {
        let buttonsContainer = document.getElementsByClassName('gridButtons')[0];
        let roundContainer = document.getElementsByClassName('roundContainer')[0];
        if (indicator) {
            roundContainer.style.display = 'block';
            buttonsContainer.style.display = 'none';
        }
        else {
            roundContainer.style.display = 'none';
            buttonsContainer.style.display = 'grid';
        }
    }
    updateCounter(value) {
        let element = document.getElementsByClassName('roundCount')[0];
        element.innerHTML = value;
    }
}
