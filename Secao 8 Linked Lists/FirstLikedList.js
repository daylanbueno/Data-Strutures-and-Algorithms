class  LikedList {
  
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
        }
        this.tail.next = newNode,
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        this.head = {
            value: value,
            next: this.head
        }
        this.length ++
        return this
    }

    printList() {
        const array = [] 
    
        let currentNode = this.head
    
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
    
        return array
    }

    getValueByIndex(index) {
        let counter = 0

        let currentNode = this.head
         
        while(counter !== index) {
            currentNode = currentNode.next
            counter ++
        }

        return currentNode
    } 

    insert(index, value) {
        if (index >= this.length) {
           return this.append(value)
        }

        const newNode = {
            value: value,
            next: null
        }

        const mainValueIndex = this.getValueByIndex(index -1) 
        const holdingPointer = mainValueIndex.next
        mainValueIndex.next = newNode
        newNode.next = holdingPointer
        this.length ++
    }

    remove(index) {
        if (index < 0 || index > this.length) return
        const mainNode = this.getValueByIndex(index -1)
        const nexNode = mainNode.next
        mainNode.next = nexNode.next
        this.length --
    }

}

const myLinkedList = new LikedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
console.log(myLinkedList.printList())
myLinkedList.remove(1)
myLinkedList.remove(-1)
myLinkedList.remove(18)
myLinkedList.remove(2)
console.log(myLinkedList.printList())