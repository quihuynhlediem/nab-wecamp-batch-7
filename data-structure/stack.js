export default class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    return this.items.push(item);
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    return this.items.pop();
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.items.length;
  }
}