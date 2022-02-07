class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    // this method return element of top.
    peek() {
        return this.top
    }

    // this method add new element in top of stack
    push(value) {
        const newNode = new Node(value)
       
        this.length ++
        newNode.next = this.top
        this.top = newNode
        
        if (!this.bottom) {
            this.bottom = this.top
        }

        return this
 
    }

    // this. method remove an element of top stack.
    pop() {
        if(!this.top) {
            return
        }

        if(!this.top.next) {
            this.bottom = null
        }

        const deletedItem = this.top
        this.top = this.top.next
        this.length --
        
        return deletedItem
    }
}

const myStack = new Stack()
myStack.push(10)
myStack.push(11)
myStack.push(18)
myStack.push(20)
console.log(myStack)
myStack.pop()
console.log(myStack)
console.log('top-element:',myStack.peek())
myStack.pop()
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.pop()
console.log(myStack)
myStack.pop()
console.log(myStack)
