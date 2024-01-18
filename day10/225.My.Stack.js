// Since we are using stack to make queue
// we are limited to use function
// we are only allow to use push and pop function

class MyQueue {
    constructor() {
        this.is = [];
        this.os = [];
    }
}

/**
 *
 * @param {number} x
 * @returns {void}
 */
MyQueue.prototype.push = function (x) {
    this.is.push(x);
};

/**
 * @returns {number}
 */
MyQueue.prototype.pop = function () {
    if (!this.os.length) {
        while (this.is.length) {
            this.os.push(this.is.pop());
        }
    }
    return this.os.pop();
};

/**
 * @returns {number}
 */
MyQueue.prototype.peek = function () {
    if (!this.os.length) {
        while (this.is.length) {
            this.os.push(this.is.pop());
        }
    }
    return this.os[this.os.length - 1];
};

/**
 * @returns {bool}
 */
MyQueue.prototype.empty = function () {
    return !this.is.length && !this.os.length;
};
