package ReverseLinkedList;

public class ReverseLinkedList {

  public static class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
      this.val = val;
    }

    ListNode(int val, ListNode next) {
      this.val = val;
      this.next = next;
    }
  }

  public static ListNode reverseList(ListNode head) {
    ListNode currNode = head;
    if (currNode.next == null) {
      return null;
    }
    ListNode prevNode = null;
    // currNode.next = null;
    while (currNode != null) {
      ListNode tempCurr = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = tempCurr;
    }
    return prevNode;
  }

  public static void main(String[] args) {
    ListNode tail = new ListNode(5);
    ListNode c = new ListNode(4, tail);
    ListNode b = new ListNode(3, c);
    ListNode a = new ListNode(2, b);
    ListNode head = new ListNode(1, a);
    // System.out.println(reverseList(head));
    ListNode curr = reverseList(head);
    while (curr != null) {
      System.out.println(curr.val);
      curr = curr.next;
    }
  }
}
