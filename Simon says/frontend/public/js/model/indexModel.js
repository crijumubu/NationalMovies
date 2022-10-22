var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class indexModel {
    constructor() {
        this._score = [];
        this._url = 'http://192.168.0.15:5500'; // URL del backend el cual se encuentra alojado en una maquina virtual dentro de mi misma red
        this.httpPeople = (url, method) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { method: method });
            const data = yield response.json();
            this.loadToLocalStorage(data);
        });
        this.sendPeople = (url, method, value) => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, { method: method, body: value, headers: { 'Content-Type': 'application/json' } });
        });
        this._onGame = false;
        this._round = 0;
        this._level = { 'Easy': 1000, 'Intermediate': 700, 'Hard': 400 };
        this._transitionTime = -1;
        this._sequence = [];
        this._userContSequence = 0;
        this.getScores();
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
    clearSequence() {
        this._sequence = [];
    }
    get userContSequence() {
        return this._userContSequence;
    }
    set userContSequence(value) {
        this._userContSequence = value;
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
    getScores() {
        this.httpPeople(`${this._url}/score`, 'get');
    }
    loadToLocalStorage(data) {
        for (let i = 0; i < data.length; i++) {
            this._score.push(data[i]);
        }
        localStorage.setItem("score", JSON.stringify(this._score));
    }
    postScores(value) {
        this.sendPeople(`${this._url}/newscore`, 'post', value);
    }
}
