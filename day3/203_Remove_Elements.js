/**
 *
 * @param {number} val
 * @param {ListNode} next
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 *
 * @param {ListNode} head
 * @param {number} val
 */
const removeElements = (head, val) => {
    const ret = ListNode(0, head);
    let cur = ret;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return ret.next;
};
