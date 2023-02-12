class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.cur = Math.floor((this.min + this.max + 1) / 2);
        return this.cur;
    }

    lower() {
        this.setRange(this.min, this.cur);
    }

    greater() {
        this.setRange(this.cur, this.max);
    }
}

module.exports = GuessingGame;
