// We create class to for each node 
class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// We have a class called Queue
class Queue {
    constructor() {
        this.first =  null;
        this.last = null;
        this.size = null;
    }

    // This method receive new element at the "end" and add it to queue
    enqueue (value) {
        const newNode = new QueueNode(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode;
            
        }

        return ++this.size;
    }

    // This method remove the element at the "beginning" in queue and return its value
    dequeue() {
        if (!this.first) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        const temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.value

    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('queue: ', JSON.stringify(queue));
queue.dequeue();
console.log('===============================');
console.log('new - queue: ', queue);
// console.log('JSON - queue: ', queue);
queue.dequeue();
console.log('===============================');
console.log('new - queue: ', queue);
queue.dequeue();
console.log('===============================');
console.log('new - queue: ', queue);