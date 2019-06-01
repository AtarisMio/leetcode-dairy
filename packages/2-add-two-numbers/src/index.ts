/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

declare class ListNode {
    constructor(val: number);
    val: number;
    next: ListNode | null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
    let temp: number;
    let plusFlag = false;
    let answer: ListNode | undefined;
    let tempAnswer!: ListNode;
    while(l1 || l2) {
        temp = (l1 && l1.val) + (l2 && l2.val) + (plusFlag ? 1 : 0);
        plusFlag = temp >= 10;
        temp %= 10;
        if (answer) {
            tempAnswer.next = new ListNode(temp);
            tempAnswer = tempAnswer.next;
        } else {
            answer =  new ListNode(temp);
            tempAnswer = answer;
        }
        l1 = l1 && l1.next!;
        l2 = l2 && l2.next!;
    }
    if (plusFlag) {
        tempAnswer.next = new ListNode(1);
    }
    return answer!;
};