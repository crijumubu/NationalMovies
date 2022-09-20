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
    addToModalHeader(title) {
        this._display = this.getElement('modal-content');
        this._display.innerHTML = "";
        this.addToDisplayString(`
            <div class="modalcontrolOptions">
                <span class="close">&times;</span>
            </div>
            <h1 class='modalTitle'>${title}</h1>
            <div class='modalInformation'>
            </div>
            `);
    }
    addToModalLevels(levels) {
        this.addToModalHeader('Levels');
        this._display = document.getElementsByClassName('modalInformation')[0];
        for (let i = 0; i < levels.length; i++) {
            const levelBtn = document.createElement("button");
            levelBtn.className = 'btn levelBtn';
            levelBtn.innerHTML += `${levels[i]}`;
            if (i + 1 == levels.length) {
                levelBtn.classList.add('last');
            }
            this.addToDisplayElement(levelBtn);
        }
    }
    addToModalScore(scores) {
        this.addToModalHeader('Score');
        this._display = document.getElementsByClassName('modalInformation')[0];
        this.addToDisplayString(`
            <h2 class='scoreSubheader'>Name</h2> 
            <h2 class='scoreSubheader'>Result</h2>`);
        if (scores.length != 0) {
            for (let i = 0; i < scores.length; i++) {
                this.addToDisplayString(`
                <p class='scoreContent'>${scores[i].name} </p> 
                <p class='scoreContent'>${scores[i].score} </p>`);
            }
        }
        else {
            this.addToDisplayString(`<p class='scoreContent'>There are no available scores yet, play now!<p>`);
        }
    }
}
