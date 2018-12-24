/*
 * [432] All O`one Data Structure
 *
 * https://leetcode.com/problems/all-oone-data-structure/description/
 *
 * algorithms
 * Hard (28.25%)
 * Total Accepted:    12.5K
 * Total Submissions: 44.2K
 * Testcase Example:  '["AllOne","getMaxKey","getMinKey"]\n[[],[],[]]'
 *
 * Implement a data structure supporting the following operations:
 *
 *
 *
 * Inc(Key) - Inserts a new key  with value 1. Or increments an existing key by
 * 1. Key is guaranteed to be a non-empty string.
 * Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise
 * decrements an existing key by 1. If the key does not exist, this function
 * does nothing. Key is guaranteed to be a non-empty string.
 * GetMaxKey() - Returns one of the keys with maximal value. If no element
 * exists, return an empty string "".
 * GetMinKey() - Returns one of the keys with minimal value. If no element
 * exists, return an empty string "".
 *
 *
 *
 *
 * Challenge: Perform all these in O(1) time complexity.
 *
 */
/**
 * Initialize your data structure here.
 */

class LinkedNode {
  constructor(v) {
    this.value = v;
    this.next = null;
    this.last = null;
    this.keys = new Set();
  }

  selectOne() {
    for (let item of this.keys.keys()) {
      return item;
    }
    return '';
  }

  destory() {
    this.last.next = this.next;
    this.next.last = this.last;
  }

  moveKey(key, targetNode) {
    targetNode.keys.add(key);
    this.keys.delete(key);
    if (this.value !== 0 && this.value !== Infinity && this.keys.size === 0) {
      this.destory();
    }
  }

  createNode(targetValue, typeA, typeB) {
    const newNode = new LinkedNode(targetValue);
    newNode[typeA] = this;
    newNode[typeB] = this[typeB];
    this[typeB][typeA] = newNode;
    this[typeB] = newNode;
    return newNode;
  }

  inc(key) {
    const targetValue = this.value + 1;
    let nextNode = (this.next && this.next.value === targetValue)
      ? this.next
      : this.createNode(targetValue, 'last', 'next')
    this.moveKey(key, nextNode);
    return nextNode;
  }

  dec(key) {
    const targetValue = this.value - 1;
    if (targetValue === 0) {
      this.keys.delete(key);
      if (this.keys.size === 0) {
        this.destory();
      }
      return null;
    }

    let lastNode = (this.last && this.last.value === targetValue)
      ? this.last
      : this.createNode(targetValue, 'next', 'last')
    this.moveKey(key, lastNode);
    return lastNode;
  }
}

class AllOne {
  constructor() {
    this.currentKeys = new Map();
    this.linkHead = new LinkedNode(0);
    this.linkTail = new LinkedNode(Infinity);
    this.linkHead.next = this.linkTail;
    this.linkTail.last = this.linkHead;
  }

  inc(key) {
    let currentNode = this.currentKeys.get(key) || this.linkHead;
    const targetNode = currentNode.inc(key);
    this.currentKeys.set(key, targetNode);
  }

  dec(key) {
    const currentNode = this.currentKeys.get(key);
    if (!currentNode) {
      return
    }
    const targetNode = currentNode.dec(key);
    if (targetNode) {
      this.currentKeys.set(key, targetNode);
    } else {
      this.currentKeys.delete(key);
    }
  }

  getMaxKey() {
    if (this.linkTail.last) {
      return this.linkTail.last.selectOne();
    }
    return '';
  }

  getMinKey() {
    if (this.linkHead.next) {
      return this.linkHead.next.selectOne();
    }
    return '';
  }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

const obj = new AllOne();
obj.inc('test');
obj.dec('test');
obj.dec('test');
console.log('max:', obj.getMaxKey());
console.log('min:', obj.getMinKey());
obj.inc('test2');
obj.inc('test2');
console.log('max:', obj.getMaxKey());
console.log('min:', obj.getMinKey());