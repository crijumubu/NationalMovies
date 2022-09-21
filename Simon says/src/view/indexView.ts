export class indexView{

    private _display: any;

    constructor() {

        this._display = this.getElement('modal');
    }

    private getElement = (selector: string): HTMLElement | null => document.getElementsByClassName(selector)[0]! as HTMLElement;

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

    public addToModalHeader(title : string): void{

        this._display = this.getElement('modal-content');
        this._display.innerHTML = "";

        this.addToDisplayString(`
            <div class="modalcontrolOptions">
                <span class="close">&times;</span>
            </div>
            <h1 class='modalTitle'>${title}</h1>
            <div class='modalInformation'>
            </div>
            `
        );
    }

    public addToModalLevels(levels: string[]): void{

        this.addToModalHeader('Levels');
        this._display = document.getElementsByClassName('modalInformation')[0];

        for (let i = 0; i < levels.length; i++){

            const levelBtn = document.createElement("button");
            levelBtn.className = 'btn levelBtn';
            levelBtn.innerHTML += `${levels[i]}`;
            
            if (i + 1 == levels.length){
                levelBtn.classList.add('last');
            }

            this.addToDisplayElement(levelBtn);
        }
    }

    public addToModalScore(scores: any[]){
        
        this.addToModalHeader('Score');
        this._display = document.getElementsByClassName('modalInformation')[0];

        this.addToDisplayString(`
            <h2 class='scoreSubheader'>Name</h2> 
            <h2 class='scoreSubheader'>Result</h2>`
        );
        
        if (scores.length != 0){

            for (let i=0; i < scores.length; i++){

                this.addToDisplayString(`
                <p class='scoreContent'>${scores[i].name} </p> 
                <p class='scoreContent'>${scores[i].score} </p>`
                );
            }
        }else{

            this.addToDisplayString(`<p class='scoreContent'>There are no available scores yet, play now!<p>`)
        }
    }

    public get simonButtons(){

        return document.getElementsByClassName('sbtn');
    }

    public blinkButton(letter : string, button : HTMLElement, originalToToggle : boolean){

        let colors : any[] = [{letter : 'B', color : ['rgb(37, 37, 214)', 'rgb(0, 0, 255)']}, { letter : 'G', color : ['rgb(40, 198, 40)', 'rgb(0, 255, 0)']}, { letter : 'R', color : ['rgb(188, 31, 31)', 'rgb(255, 0, 0)']}, {letter : 'Y', color : ['rgb(190, 190, 33)', 'rgb(255, 255, 0)']}];

        for (let i=0; i<colors.length; i++){

            if (colors[i].letter == letter){

                if (originalToToggle){
                    button.style.background = colors[i].color[1];
                }else{
                    button.style.background = colors[i].color[0];
                }
            }
        }
    }
}