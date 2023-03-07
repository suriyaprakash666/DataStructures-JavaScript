// Import "Linkedlist-Tail" to perform Stack Operations

const LinkedList = require('./Linkedlist-Tail')

class LinkedlistStack {
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        return this.list.print()
    }
}

const stack = new LinkedlistStack
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.peek()
stack.print()
stack.pop()
stack.print()
console.log(stack.getSize())
