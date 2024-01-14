class MySinglyLinkedNode {
    constructor(next, val) {
        this.val = val;
        this.next = next;
    }
}

class MySinglyLinkedList {
    constructor() {
        this._size = 0;
        this._tail = null;
        this._head = null;
    }
}

/**
 *
 * @param {number} index
 * @return {number}
 */
MySinglyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this._size) return null;
    let cur = new MySinglyLinkedNode(0, this._head);
    while (index-- >= 0) {
        cur = cur.next;
    }
    return cur.val;
};

MySinglyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this._size) return null;
    let cur = new MySinglyLinkedNode(0, this._head);
    while (index-- >= 0) {
        cur = cur.next;
    }
    return cur;
};

/**
 *
 * @param {number} val
 */
MySinglyLinkedList.prototype.addAtHead = function (val) {
    const node = new MySinglyLinkedNode(val, this._head);
    this._head = node;
    this._size++;
    if (!this._tail) {
        this._tail = node;
    }
};

/**
 *
 * @param {number} val
 */
MySinglyLinkedList.prototype.addAtTail = function (val) {
    const node = new MySinglyLinkedNode(val, null);
    this._size++;
    if (!this._tail) {
        this._tail = node;
        this._head = node;
    } else {
        this._tail.next = node;
        this._tail = node;
    }
};

MySinglyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this._size) return;
    if (index <= 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this._size) {
        this.addAtTail(val);
        return;
    }
    const node = this.getNode(index - 1);
    node.next = new MySinglyLinkedNode(val, node.next);
    this._size++;
};

MySinglyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this._size) return;
    if (index === 0) {
        this._head = this._head.next;
        if (index === this._size - 1) {
            this._tail = this._head;
        }
        this._size--;
        return;
    }

    const node = this.getNode(index - 1);
    node.next = node.next.next;
    if (index === this._size - 1) {
        this._tail = node;
    }
    this._size--;
};
