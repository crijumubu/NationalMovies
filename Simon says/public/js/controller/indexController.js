export class indexController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.addModalEvents();
    }
    addModalEvents() {
        let openModalBtn = document.getElementsByClassName('btn')[0];
        let closeModalBtn = document.getElementsByClassName('close')[0];
        openModalBtn.addEventListener('click', () => {
            this.view.displayModal('block');
            this.userLevels();
        });
        closeModalBtn.addEventListener('click', () => {
            this.view.displayModal('none');
        });
        window.addEventListener('click', (event) => {
            if (event.target == this.view.modal) {
                this.view.displayModal('none');
            }
        });
    }
    userLevels() {
        const levels = ['Easy', 'Intermediate', 'Hard'];
        this.view.addToModal(levels);
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
}
