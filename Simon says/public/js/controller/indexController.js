export class indexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.addModalEvents();
    }
    addSimonEvent() {
        let playButtons = this.view.simonButtons;
        for (let i = 0; i < playButtons.length; i++) {
            let button = playButtons[i];
            let buttonLetter = button.textContent;
            //! TODO -> Add click sound
            button.addEventListener('click', () => {
                if (this.model.onGame) {
                    console.log('onclick letter -> ' + buttonLetter + '\nsequence letter -> ' + this.model.sequence[this.model.userContSequence].textContent + '\ncont sequence -> ' + this.model.userContSequence);
                    if (buttonLetter == this.model.sequence[this.model.userContSequence].textContent && this.model.sequence.length - 1 == this.model.userContSequence) {
                        this.model.userContSequence = 0;
                        this.round();
                    }
                    else if (buttonLetter == this.model.sequence[this.model.userContSequence].textContent) {
                        this.model.userContSequence++;
                    }
                    else {
                        this.gameOver();
                    }
                }
            });
            button.addEventListener('mouseenter', () => {
                if (this.model.onGame) {
                    this.view.blinkButton(buttonLetter, button, true);
                }
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
        let values = [];
        for (let i = 0; i < this.model.sequence.length; i++) {
            values.push(this.model.sequence[i].textContent);
        }
        console.log(values);
    }
    showSequence() {
        let i = 0;
        this.model.onGame = false;
        let transitionTimer = setInterval(() => {
            let button = this.model.sequence[i];
            let buttonLetter = button.textContent;
            this.view.blinkButton(buttonLetter, button, true);
            setTimeout(() => this.view.blinkButton(buttonLetter, button, false), this.model.transitionTime);
            i++;
            if (i == this.model.sequence.length) {
                this.model.onGame = true;
                clearInterval(transitionTimer);
            }
        }, this.model.transitionTime * 2);
    }
    gameOver() {
        this.view.addToModalNewScore();
        this.view.displayModal('block');
        let buttonSubmit = document.getElementsByClassName('submit')[0];
        buttonSubmit.addEventListener('click', () => {
            let input = document.getElementsByClassName('name')[0];
            this.model.pushToScore({ name: input.value, score: this.model.round });
            this.model.reset();
            this.view.displayModal('none');
        });
    }
    round() {
        this.model.round++;
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
        this.round();
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
