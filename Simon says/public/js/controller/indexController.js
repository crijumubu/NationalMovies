export class indexController {
    constructor(model, view) {
        this.score = [];
        this.model = model;
        this.view = view;
        this.score.push({ name: 'Cristian', score: 20 }, { name: 'Sergio', score: 1 }, { name: 'Santiago', score: 5 }, { name: 'Andrea', score: 100 });
        this.addModalEvents();
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
                    this.showScore();
                }
                // ! REVIEW -> Button close failure
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
                this.play(levelBtn[i].innerHTML);
            });
        }
    }
    play(level) {
        switch (level) {
            case 'Easy':
                console.log('Easy');
                break;
            case 'Intermediate':
                console.log('Intermediate');
                break;
            case 'Hard':
                console.log('Hard');
                break;
        }
    }
    /*public bestScores(): void{
    
    }*/
    showScore() {
        this.view.displayModal('block');
        this.score.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        console.log(this.score);
        this.view.addToModalScore(this.score);
    }
}
