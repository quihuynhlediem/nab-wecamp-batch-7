class Node {
  constructor(_value) {
    this.value = _value;
    this.prev = null;
    this.next = null;
  }
}

export default class Queue {
  constructor() {
    this.dummyHead = new Node();
    this.dummyTail = new Node();
    this.dummyHead.prev = this.dummyTail;
    this.dummyTail.next = this.dummyHead;
    this._length = 0;
  }

  /**
   * Adds an item to the back of the queue.
   * @param {*} item The item to be pushed onto the queue.
   * @return {number} The new length of the queue.
   */
  enqueue(item) {
    const newNode = new Node(item);
    const prevLast = this.dummyTail.next;

    newNode.next = prevLast;
    newNode.prev = this.dummyTail;

    prevLast.prev = newNode;
    this.dummyTail.next = newNode;

    this._length++;
    return this._length;
  }

  /**
   * Removes an item from the front of the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  dequeue() {
    if (this._length === 0){
      return undefined;
    }
    const nextFirst = this.dummyHead.prev;

    this.dummyHead.prev = nextFirst.prev;
    nextFirst.prev.next = this.dummyHead;

    this._length--;
    return nextFirst.value;
  }

  /**
   * Determines if the queue is empty.
   * @return {boolean} `true` if the queue has no items, `false` otherwise.
   */
  isEmpty() {
    return this._length === 0;
  }

  /**
   * Returns the item at the front of the queue without removing it from the queue.
   * @return {*} The item at the front of the queue if it is not empty, `undefined` otherwise.
   */
  front() {
    return this.dummyHead.prev.value;
  }

  /**
   * Returns the item at the back of the queue without removing it from the queue.
   * @return {*} The item at the back of the queue if it is not empty, `undefined` otherwise.
   */
  back() {
    return this.dummyTail.next.value;
  }

  /**
   * Returns the number of items in the queue.
   * @return {number} The number of items in the queue.
   */
  length() {
    return this._length;
  }
}