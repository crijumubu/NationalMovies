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

    //! TODO -> Link this functionality with the others ones 

    private addSimonEvent(): void{

        let playButtons = this.view.simonButtons;

        for (let i=0; i<playButtons.length; i++){

            playButtons[i].addEventListener('click', () => {

                if (this.model.onGame){

                    this.model.pushToUserSequence(playButtons[i].textContent!);
                }
            });
        }
    }

    private transitionSequence(letter : string){

        let button = this.view.simonButtons[0] as HTMLElement;

        let transitionTimer = setInterval(() => {

            this.view.blinkButton(letter, button, true);
            setTimeout( () => this.view.blinkButton(letter, button, false), this.model.transitionTime);
            clearInterval(transitionTimer);

        }, this.model.transitionTime);

    }

    //! TODO -> Simple static functionality
    
    private sequence(){

        this.transitionSequence('G');

    }

    private play(level : string): void{

        switch (level){

            case 'Easy':
                this.model.transitionTime = 1000;
                break;

            case 'Intermediate':
                this.model.transitionTime = 650;
                break;
                
            case 'Hard':
                this.model.transitionTime = 300;
                break;
        }

        this.sequence();
    }
}