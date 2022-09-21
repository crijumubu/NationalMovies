export class indexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.addModalEvents();
        this.model.pushToScore({ name: 'Cristian', score: 20 });
        this.model.pushToScore({ name: 'Sergio', score: 1 });
        this.model.pushToScore({ name: 'Santiago', score: 5 });
        this.model.pushToScore({ name: 'Andrea', score: 100 });
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
    //! TODO -> Link this functionality with the others ones 
    addSimonEvent() {
        let playButtons = this.view.simonButtons;
        for (let i = 0; i < playButtons.length; i++) {
            playButtons[i].addEventListener('click', () => {
                if (this.model.onGame) {
                    this.model.pushToUserSequence(playButtons[i].textContent);
                }
            });
        }
    }
    transitionSequence(letter) {
        let button = this.view.simonButtons[0];
        let transitionTimer = setInterval(() => {
            this.view.blinkButton(letter, button, true);
            setTimeout(() => this.view.blinkButton(letter, button, false), this.model.transitionTime);
            clearInterval(transitionTimer);
        }, this.model.transitionTime);
    }
    //! TODO -> Simple static functionality
    sequence() {
        this.transitionSequence('G');
    }
    play(level) {
        switch (level) {
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
