export class indexView{

    private _display: any;

    constructor() {
        this._display = this.getElement('container');
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

    public set display(display: HTMLElement) {
        this._display = display;
    }

    public get display() {
        return this._display;
    }

    public addToDisplay(content: string): void {
        this._display.innerHTML += `${content}`
    }
}