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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
  let temp: number;
  let plusFlag = false;
  const answer: ListNode = new ListNode(0);
  let tempAnswer: ListNode = answer;
  while (l1 && l2) {
    temp = (l1 && l1.val) + (l2 && l2.val) + (plusFlag ? 1 : 0);
    plusFlag = temp >= 10;
    temp %= 10;
    tempAnswer.next = new ListNode(temp);
    tempAnswer = tempAnswer.next;
    // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
    l1 = l1 && l1.next!;
    // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-non-null-assertion
    l2 = l2 && l2.next!;
  }
  let cur = l1 || l2;
  if (cur) {
    tempAnswer.next = cur;
  }
  let next = cur;
  while (plusFlag && next) {
    cur = next;
    temp = next.val + 1;
    plusFlag = temp >= 10;
    if (plusFlag) {
      next.val = 0;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      next = next.next!;
    } else {
      next.val += 1;
    }
  }
  if (plusFlag) {
    (cur || tempAnswer).next = new ListNode(1);
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return answer.next!;
};
