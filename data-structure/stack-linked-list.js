class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

export default class Stack {
	constructor() {
		this.dummyHead = new Node();
		this.dummyTail = new Node();

		this.dummyHead.prev = this.dummyTail;
		this.dummyTail.next = this.dummyHead;

		this._length = 0;
		return this._length;
	}

	/**
	 * Pushes an item onto the top of the stack.
	 * @param {*} item The item to be pushed onto the stack.
	 * @return {number} The new length of the stack.
	 */
	push(item) {
		const newNode = new Node(item);
		const prevLast = this.dummyTail.next;

		newNode.next = prevLast;
		newNode.prev = this.dummyTail;

		this.dummyTail.next = newNode;
		prevLast.prev = newNode;

		this._length++;
		return this._length;
	}

	/**
	 * Remove an item at the top of the stack.
	 * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
	 */
	pop() {
		if (this._length === 0) {
			return undefined;
		}
		const prevLast = this.dummyTail.next;

		prevLast.next.prev = this.dummyTail;
		this.dummyTail.next = prevLast.next;

		this._length--;
		return prevLast.value;
	}

	/**
	 * Determines if the stack is empty.
	 * @return {boolean} `true` if the stack has no items, `false` otherwise.
	 */
	isEmpty() {
		return this._length === 0;
	}

	/**
	 * Returns the item at the top of the stack without removing it from the stack.
	 * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
	 */
	peek() {
		return this.dummyTail.next.value;
	}

	/**
	 * Returns the number of items in the stack.
	 * @return {number} The number of items in the stack.
	 */
	length() {
		return this._length;
	}
}
