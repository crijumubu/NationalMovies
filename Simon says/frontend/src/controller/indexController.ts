import { indexModel } from "../model/indexModel";
import { indexView } from "../view/indexView";

export class indexController {

    public model: indexModel;
    public view: indexView;

    constructor(model: indexModel, view: indexView) {

        this.model = model;
        this.view = view;
        this.addModalEvents();
        this.addSimonEvent();
    }

    private addSimonEvent(): void{

        let playButtons = this.view.simonButtons;
        for (let i = 0; i < playButtons.length; i++){

            let button = playButtons[i] as HTMLElement;
            let buttonLetter = button.textContent!;

            button.addEventListener('click', () => {

                if (this.model.onGame){
       
                    if (buttonLetter == this.model.sequence[this.model.userContSequence].textContent){

                        this.model.sounds[buttonLetter].play();
                        if (this.model.sequence.length - 1 == this.model.userContSequence){

                            this.model.userContSequence = 0;
                            this.round();
                        }else{
                            this.model.userContSequence++;
                        }
                    }else{

                        this.model.sounds['E'].play();
                        this.gameOver();
                    }
                }
            });

            button.addEventListener('mouseenter', () => {

                if (this.model.round != 0 && this.model.onGame){

                    this.view.blinkButton(buttonLetter, button, true);
                    button.style.cursor = 'pointer';   
                }else{
                    button.style.cursor = 'default';
                }
            });

            button.addEventListener('mouseleave', () => {

                if (this.model.round != 0){
                    this.view.blinkButton(buttonLetter, button, false);
                }
            });
        }
    }
    
    private generateSequence(){

        this.model.clearSequence();

        for (let i=0; i<this.model.round; i++){
            
            let random = Math.floor(Math.random() * 4);
            let button = this.view.simonButtons[random] as HTMLElement;
            this.model.pushToSequence(button);
            
        }
    }

    private showSequence(){
        
        let i = 0;
        this.model.onGame = false;

        let transitionTimer = setInterval(() => {

            let button = this.model.sequence[i];
            let buttonLetter = button.textContent!;
            this.view.blinkButton(buttonLetter, button, true);
            setTimeout( () => this.view.blinkButton(buttonLetter, button, false), this.model.transitionTime);
            this.model.sounds[buttonLetter].play();

            i++;
            if (i == this.model.sequence.length){

                this.model.onGame = true;
                clearInterval(transitionTimer);
            }
        }, this.model.transitionTime * 2);
    }  

    private gameOver(): void{

        this.view.addToModalNewScore();
        this.view.displayModal('block');

        let buttonSubmit = this.view.getElement('submit')!;
        buttonSubmit.addEventListener('click', () => {

            let input = this.view.getElement('name') as HTMLInputElement;

            if (input.value != ''){

                this.model.postScores(
                    JSON.stringify({name: input.value, level: Object.keys(this.model.level).find(key => this.model.level[key] === this.model.transitionTime) , score: this.model.round})
                );
                this.model.reset();
                this.view.displayModal('none');
            }
        });

        this.view.roundCounter(false);
    }

    private round(): void{

        this.model.round++;
        this.view.updateCounter(this.model.round.toString());
        this.generateSequence();
        this.showSequence();
    }

    private play(level : string): void{

        this.model.transitionTime = this.model.level[level];
        this.view.roundCounter(true);
        this.round();
    }

    public addModalEvents(): void{

        let modalsBtn = this.view.getElements('btn');
        for (let i = 0; i < modalsBtn.length; i++){

            modalsBtn[i].addEventListener('click', () => {

                this.view.displayModal('block'); 

                if (i == 0){
                    this.userLevels();
                }else if (i == 1){
                    this.bestScores();
                }

                let closeModalBtn = this.view.getElement('close')!;
                closeModalBtn.addEventListener('click', () => {
                    this.view.displayModal('none');
                });  
            });
        }
    }

    private userLevels(): void{

        this.view.addToModalLevels();

        const levelsBtn = this.view.getElements('levelBtn');
        for (let i = 0; i < levelsBtn.length; i++){

            levelsBtn[i].addEventListener('click', () => {

                this.view.displayModal('none');
                this.play(levelsBtn[i].textContent!);
            });
        }
    }

    public bestScores() : void{

        this.view.displayModal('block');
        
        let score = JSON.parse(localStorage.getItem("score") || "[]");
        score.sort(function (a : any, b : any) {

            if (a.score < b.score) {
              return 1;
            }
            if (a.score > b.score) {
              return -1;
            }
            return 0;
        });

        this.view.addToModalScore(score);
    }
}