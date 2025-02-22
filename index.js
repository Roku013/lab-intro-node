class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutofBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return this.items[this.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
