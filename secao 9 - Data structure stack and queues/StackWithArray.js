
class StackArray {
    constructor() {
        this.values = []
    }

    // this method return element of top.
    peek() {
       return this.values[this.values.length -1]
    }

    // this method add new element in top of stack
    push(value) {        
        this.values.push(value)
        return this
    }

    // this. method remove an element of top stack.
    pop() {
        return this.values.unshift()
    }
}

const myStackArray = new StackArray()
myStackArray.push('google')
myStackArray.push('udemy')
myStackArray.push('discord')
console.log(myStackArray)
console.log('top element ',myStackArray.peek())
