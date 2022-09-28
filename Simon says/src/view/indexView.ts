export class indexView{

    private _display: any;

    constructor() {

        this._display = this.getElement('modal');
    }

    public getElement = (selector: string): HTMLElement | null => document.getElementsByClassName(selector)[0]! as HTMLElement;
    public getElements = (selector: string): any => document.getElementsByClassName(selector)!;

    public set display(display: HTMLElement) {

        this._display = display;
    }

    public get display() {

        return this._display;
    }

    public addToDisplayString(content: string): void {

        this._display.innerHTML += `${content}`;
    }

    public addToDisplayElement(content: HTMLElement): void {

        this._display.appendChild(content);
    }

    public displayModal(display: string): void {
        
        this._display = this.getElement('modal');
        this._display.style.display = display;
    }

    public addToModalHeader(title : string, options : boolean): void{

        this._display = this.getElement('modal-content');
        this._display.innerHTML = "";

        if (options){
            this.addToDisplayString(`<div class="modalcontrolOptions"> <span class="close">&times;</span> </div>`);
        }

        this.addToDisplayString(` <h1 class='modalTitle'>${title}</h1> <div class='modalInformation'> </div>`);
    }

    public addToModalLevels(): void{

        const levels : string[] = ['Easy', 'Intermediate', 'Hard'];

        this.addToModalHeader('Levels', true);
        this._display = this.getElement('modalInformation');

        for (let i = 0; i < levels.length; i++){

            const levelBtn = document.createElement("button");
            levelBtn.className = 'btn levelBtn';
            levelBtn.innerHTML += `${levels[i]}`;

            this.addToDisplayElement(levelBtn);
        }
    }

    public addToModalScore(scores: any[]){
        
        this.addToModalHeader('Score', true);
        this._display = this.getElement('modalInformation');
        
        if (scores.length != 0){

            this.addToDisplayString(`<h2 class='scoreSubheader'>Name</h2> <h2 class='scoreSubheader'>Level</h2> <h2 class='scoreSubheader'>Result</h2>`);

            for (let i = 0; i < 10; i++){

                if (i != scores.length){
                    this.addToDisplayString(`<p class='scoreContent'>${scores[i].name} </p> <p class='scoreContent'>${scores[i].level} </p> <p class='scoreContent'>${scores[i].score} </p>`);
                }else{
                    break;
                }
            }
        }else{
            this.addToDisplayString(`<p class='scoreContent noScore'>There are no available scores yet, play now!<p>`)
        }
    }

    public addToModalNewScore(){

        this.addToModalHeader('Game over', false);

        this._display = this.getElement('modalInformation');
        this._display.innerHTML = "";

        this.addToDisplayString(`<form> <label class='labelName' for='name'>Input your name:</label> <input type='text' id='name' class='name' name='name' required> <input type='submit' class='btn submit last' value='Submit'> </form>`);
    }

    public get simonButtons(){

        return document.getElementsByClassName('sbtn');
    }

    public blinkButton(letter : string, button : HTMLElement, originalToToggle : boolean){

        let colors : any[] = [{letter : 'B', color : ['rgb(37, 37, 214)', 'rgb(0, 0, 255)']}, { letter : 'G', color : ['rgb(40, 198, 40)', 'rgb(0, 255, 0)']}, { letter : 'R', color : ['rgb(188, 31, 31)', 'rgb(255, 0, 0)']}, {letter : 'Y', color : ['rgb(190, 190, 33)', 'rgb(255, 255, 0)']}];
        for (let i = 0; i < colors.length; i++){

            if (colors[i].letter == letter){

                if (originalToToggle){
                    button.style.background = colors[i].color[1];
                }else{
                    button.style.background = colors[i].color[0];
                }
            }
        }
    }

    public roundCounter(indicator : boolean){

        let buttonsContainer = this.getElement('gridButtons')!;
        let roundContainer = this.getElement('roundContainer')!;

        if (indicator){

            roundContainer.style.display = 'block';
            buttonsContainer.style.display = 'none';
        }else{

            roundContainer.style.display = 'none';
            buttonsContainer.style.display = 'grid';
        }
    }

    public updateCounter(value : string){

        let element = this.getElement('roundCount') as HTMLElement;
        element.innerHTML = value;
    }
}