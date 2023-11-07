// We create class to for each node 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// We have  a class called Stack
class Stack {
    constructor() {
        this.first =  null;
        this.last = null;
        this.size = null;
    }

    // This method receive new element and add it to stack
    push (value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp =  this.first;
            this.first = newNode;
            this.first.next = temp
        }
        return ++this.size;
    }

    // This method remove the top element in stack and return its value
    pop() {
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

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log('stack: ', JSON.stringify(stack));
stack.pop();

console.log('new - stack: ', stack);