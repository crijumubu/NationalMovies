export class indexModel {
    constructor() {
        this._onGame = false;
        this._loose = false;
        this._transitionTime = -1;
        this._sequence = [];
        this._userSequence = [];
        this._score = [];
    }
    get onGame() {
        return this._onGame;
    }
    set onGame(value) {
        this._onGame = value;
    }
    get loose() {
        return this._loose;
    }
    set loose(value) {
        this._loose = value;
    }
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
    get userSequence() {
        return this._userSequence;
    }
    pushToUserSequence(value) {
        this._userSequence.push(value);
    }
    clearSequences() {
        this._sequence = [];
    }
    get score() {
        return this._score;
    }
    pushToScore(value) {
        this._score.push(value);
    }
}
