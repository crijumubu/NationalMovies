import { indexModel } from "../model/indexModel";
import { indexView } from "../view/indexView";

export class indexController {

    public model: indexModel;
    public view: indexView;

    constructor(model: indexModel, view: indexView) {

        this.model = model;
        this.view = view;
        this.addModalEvents();

        //! TODO -> Simple static score list for testing

        this.model.pushToScore({name: 'Cristian', score: 20});
        this.model.pushToScore({name: 'Sergio', score: 1});
        this.model.pushToScore({name: 'Santiago', score: 5});
        this.model.pushToScore({name: 'Andrea', score: 100});
    }

    //! TODO -> Link this functionality with the others ones 

    private addSimonEvent(): void{

        let playButtons = this.view.simonButtons;

        for (let i=0; i<playButtons.length; i++){

            let button = playButtons[i] as HTMLElement;
            let buttonLetter = button.textContent!;

            button.addEventListener('click', () => {

                if (this.model.onGame){

                    this.model.pushToUserSequence(buttonLetter);
                }
            });

            button.addEventListener('mouseenter', () => {

                this.view.blinkButton(buttonLetter, button, true);
            });
    
            button.addEventListener('mouseleave', () => {
    
                this.view.blinkButton(buttonLetter, button, false);
            });
        }
    }
    
    private generateSequence(){

        let random = Math.floor(Math.random() * 4);

        let button = this.view.simonButtons[random] as HTMLElement;

        this.model.pushToSequence(button);
    }

    private showSequence(){
        
        let i = 0;
        let transitionTimer = setInterval(() => {

            let button = this.model.sequence[i];
            let buttonLetter = button.textContent!;

            this.view.blinkButton(buttonLetter, button, true);
            setTimeout( () => this.view.blinkButton(buttonLetter, button, false), this.model.transitionTime);
            console.log(buttonLetter);

            i++;
            if (i == this.model.sequence.length){
                clearInterval(transitionTimer);
            }

        }, this.model.transitionTime);
    }

    //! TODO -> Incomplete functionality

    private round(): void{

        this.generateSequence();
        this.showSequence();
    }

    private play(level : string): void{

        switch (level){

            case 'Easy':
                this.model.transitionTime = 1000;
                break;

            case 'Intermediate':
                this.model.transitionTime = 750;
                break;
                
            case 'Hard':
                this.model.transitionTime = 500;
                break;
        }

        this.addSimonEvent();
        this.round();
    }

    public addModalEvents(): void{

        let modalsBtn = document.getElementsByClassName('btn')!;

        for (let i=0; i<modalsBtn.length; i++){

            modalsBtn[i].addEventListener('click', () => {

                this.view.displayModal('block');  

                if (i == 0){
                    this.userLevels();
                }else if (i == 1){
                    this.bestScores();
                }

                let closeModalBtn = document.getElementsByClassName('close')[0]!;

                closeModalBtn.addEventListener('click', () => {
                    this.view.displayModal('none');
                });  
                
            });
        }
    }

    private userLevels(): void{

        const levels : string[] = ['Easy', 'Intermediate', 'Hard'];

        this.view.addToModalLevels(levels);

        const levelBtn = document.getElementsByClassName('levelBtn');

        for (let i=0; i<levelBtn.length; i++){

            levelBtn[i].addEventListener('click', (event) => {

                this.view.displayModal('none');
                this.model.onGame = true;
                this.play(levelBtn[i].innerHTML);
            });
        }
    }

    public bestScores(): void{

        this.view.displayModal('block');

        this.model.score.sort(function (a, b) {

            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
        });

        this.view.addToModalScore(this.model.score);
    }
}