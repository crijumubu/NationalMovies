export class indexView {
    /*private _openModalBtn: any;
    private _closeModalBtn: any;*/
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this._display = this.getElement('container');
        this._modal = document.getElementsByClassName('modal')[0];
    }
    set display(display) {
        this._display = display;
    }
    get display() {
        return this._display;
    }
    addToDisplay(content) {
        this._display.innerHTML += `${content}`;
    }
    /*public setModalAsDisplay(){
        this._display = this._modal;
    }*/
    get modal() {
        return this._modal;
    }
    displayModal(display) {
        this._modal.style.display = display;
    }
    addToModal(levels) {
        this._display = this._modal.children[0].childNodes[5];
        for (let i = 0; i < levels.length; i++) {
            const levelBtn = document.createElement("button");
            levelBtn.className = 'btn levelBtn';
            levelBtn.innerHTML += `${levels[i]}`;
            if (i + 1 == levels.length) {
                levelBtn.style.gridColumn = "1/3";
                levelBtn.style.width = "40%";
                levelBtn.style.height = "60px";
            }
            this._display.appendChild(levelBtn);
        }
    }
}
