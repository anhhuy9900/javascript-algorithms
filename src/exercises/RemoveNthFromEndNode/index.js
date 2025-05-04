/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    const arr = [];
    let pos = 0;
    for (let i = head.length - 1; i >= 0; i--) {
        pos++;
        if (n !== pos) {
            arr.unshift(head[i])
        }
    }

    return arr;
}

console.log('removeNthFromEnd([1,2,3,4,5], 2): ', removeNthFromEnd([1,2,3,4,5], 2));
console.log('removeNthFromEnd([1], 1): ', removeNthFromEnd([1], 1));
console.log('removeNthFromEnd([1,2], 1): ', removeNthFromEnd([1,2], 1));
console.log('removeNthFromEnd([], 1): ', removeNthFromEnd([], 1));
console.log('removeNthFromEnd([3, 5, 7, 8], 0): ', removeNthFromEnd([3, 5, 7, 8], 0));