export class indexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.addModalEvents();
        //! TODO -> Simple static score list for testing
        this.model.pushToScore({ name: 'Cristian', score: 20 });
        this.model.pushToScore({ name: 'Sergio', score: 1 });
        this.model.pushToScore({ name: 'Santiago', score: 5 });
        this.model.pushToScore({ name: 'Andrea', score: 100 });
    }
    //! TODO -> Link this functionality with the others ones 
    addSimonEvent() {
        let playButtons = this.view.simonButtons;
        for (let i = 0; i < playButtons.length; i++) {
            let button = playButtons[i];
            let buttonLetter = button.textContent;
            // button.addEventListener('click', () => {
            //     if (this.model.onGame){
            //         this.model.pushToUserSequence(buttonLetter);
            //     }
            // });
            button.addEventListener('mouseenter', () => {
                this.view.blinkButton(buttonLetter, button, true);
            });
            button.addEventListener('mouseleave', () => {
                this.view.blinkButton(buttonLetter, button, false);
            });
        }
    }
    generateSequence() {
        let random = Math.floor(Math.random() * 4);
        let button = this.view.simonButtons[random];
        this.model.pushToSequence(button);
    }
    showSequence() {
        let i = 0;
        let transitionTimer = setInterval(() => {
            let button = this.model.sequence[i];
            let buttonLetter = button.textContent;
            this.view.blinkButton(buttonLetter, button, true);
            setTimeout(() => this.view.blinkButton(buttonLetter, button, false), this.model.transitionTime);
            console.log(buttonLetter);
            i++;
            if (i == this.model.sequence.length) {
                clearInterval(transitionTimer);
            }
        }, this.model.transitionTime);
    }
    round() {
        this.generateSequence();
        this.showSequence();
    }
    play(level) {
        switch (level) {
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
        for (let i = 0; i < 3; i++) {
            this.round();
        }
    }
    addModalEvents() {
        let modalsBtn = document.getElementsByClassName('btn');
        for (let i = 0; i < modalsBtn.length; i++) {
            modalsBtn[i].addEventListener('click', () => {
                this.view.displayModal('block');
                if (i == 0) {
                    this.userLevels();
                }
                else if (i == 1) {
                    this.bestScores();
                }
                let closeModalBtn = document.getElementsByClassName('close')[0];
                closeModalBtn.addEventListener('click', () => {
                    this.view.displayModal('none');
                });
            });
        }
    }
    userLevels() {
        const levels = ['Easy', 'Intermediate', 'Hard'];
        this.view.addToModalLevels(levels);
        const levelBtn = document.getElementsByClassName('levelBtn');
        for (let i = 0; i < levelBtn.length; i++) {
            levelBtn[i].addEventListener('click', (event) => {
                this.view.displayModal('none');
                this.model.onGame = true;
                this.play(levelBtn[i].innerHTML);
            });
        }
    }
    bestScores() {
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
