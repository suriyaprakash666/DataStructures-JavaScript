class Queue{

    // Using Array as Queue

    // constructor(){
    //     this.items=[];
    // }

    // enqueue(element){
    //     this.items.push(element);
    // }

    // dequeue(){
    //     return this.items.shift();   
    // }

    // peek(){
    //     if(!this.isEmpty()){
    //         return this.items[0];
    //     } else {
    //         return null;
    //     }
    // }

    // isEmpty(){
    //     return this.items.length === 0;
    // }

    // size(){
    //     return this.items.length;
    // }

    // print(){
    //     return this.items.toString();
    // }

    // Using Object as Queue

    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    peek(){
        return this.items[this.front];
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items);
    }

}

const queue = new Queue;

console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();
console.log(queue.peek());

queue.dequeue();

queue.print();

console.log(queue.size());
