export class indexModel {
    constructor() {
        this._onGame = false;
        this._round = 0;
        this._level = { 'Easy': 1000, 'Intermediate': 700, 'Hard': 400 };
        this._transitionTime = -1;
        this._sequence = [];
        this._userContSequence = 0;
        this._score = JSON.parse(localStorage.getItem("score") || "[]");
        this._sounds = {
            'G': new Audio('./../../public/resources/greenSound.mp3'),
            'R': new Audio('./../../public/resources/redSound.mp3'),
            'B': new Audio('./../../public/resources/blueSound.mp3'),
            'Y': new Audio('./../../public/resources/yellowSound.mp3'),
            'E': new Audio('./../../public/resources/errorSound.mp3')
        };
    }
    get onGame() {
        return this._onGame;
    }
    set onGame(value) {
        this._onGame = value;
    }
    get round() {
        return this._round;
    }
    set round(value) {
        this._round = value;
    }
    get level() {
        return this._level;
    }
    // public set level(value : string){
    //     this._level = value;
    // }
    get transitionTime() {
        return this._transitionTime;
    }
    set transitionTime(value) {
        this._transitionTime = value;
    }
    get sequence() {
        return this._sequence;
    }
    pushToSequence(value) {
        this._sequence.push(value);
    }
    get userContSequence() {
        return this._userContSequence;
    }
    set userContSequence(value) {
        this._userContSequence = value;
    }
    pushToScore(value) {
        this._score.push(value);
        localStorage.setItem("score", JSON.stringify(this._score));
    }
    get sounds() {
        return this._sounds;
    }
    reset() {
        this._onGame = false;
        this._round = 0;
        this._transitionTime = -1;
        this._sequence = [];
        this._userContSequence = 0;
    }
}
