class LinkedList {
  constructor(list = []) {
      this.list = list;
  }

  appendToTail(v) {
    this.list.push(v)
  }

  deleteNode(index) {
    const array = this.list.filter((elem, idx) => {
      if (index !== idx) {
        return elem;
      }
    });
    this.list = array;
  }
}
