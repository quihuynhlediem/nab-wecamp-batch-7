/**
 * @param {ListNode} head
 * @param {number} n
 * @return {Node | null}
 */
export default function reverseLinkedList(head) {
  if (head === null){
    return null;
  }
  if (head.next === null){
    return head;
  }
  let prevNode = head;
  let currNode = prevNode.next;
  while (currNode !== null){
    let tempNext = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNext;
  };
  return currNode;
}

reverseLinkedList(head);