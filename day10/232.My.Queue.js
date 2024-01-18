//Since we're using JS array as Queue, we can only use
// array.prototype.push() && array.prototype.shift()
class MyStack {
    constructor() {
        this.queue = [];
        this._queue = [];
    }
}

/**
 *
 * @param {number} x
 * @returns {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * @returns {number}
 */
MyStack.prototype.pop = function () {
    while (this.queue.length > 1) {
        this._queue.push(this.queue.shift());
    }
    const ans = this.queue.shift();
    while (this._queue.length) {
        this.queue.push(this.queue.shift());
    }
    return ans;
};

/**
 * @returns {number}
 */
MyStack.prototype.top = function () {
    const x = this.pop();
    this.queue.push(x);
    return x;
};

/**
 * @returns {boolean}
 */
MyStack.prototype.empty = function () {
    return !this.queue.length;
};
