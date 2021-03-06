const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return (this._head) ? this._head.data : this._head;
    }

    tail() {
        return (this._tail) ? this._tail.data : this._tail;
    }

    at(index) {
        var current = this._head,
            length = this.length,
            i = 0;
        if (length === 0 || index < 0 || index > length) {
            throw new Error('not exist');
        }
        while (i < index) {
            current = current.next;
            i++;
        }
        return current.data;
    }

    insertAt(index, data) {
        var node = new Node(data);
        var temp = this._head;
        var i = 0;
        while (i !== this.length) {
            if (i === index) {
                node.prev = temp.prev;
                node.next = temp;
                temp.prev.next = node;
                return this;
            }
            temp = temp.next;
            i++;
        }
        return this;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        else return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;

    }

    deleteAt(index) {
        var temp = this._head;
        var prev = null;
        if (index === 0) {
            temp = temp.next;
            return this;
        }
        for (let i = 1; i <= index && temp; i += 1) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = temp.next;
        return this;
    }

    reverse() {
        var current = this._head;
        var temp = null;
        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;

    }

    indexOf(data) {
        var node = this._head;
        var i = 0;
        while (i !== this.length) {
            if (node.data === data) {
                return i;
            }
            node = node.next;
            i++;
        }
        return i = -1;
    }
}



module.exports = LinkedList;
