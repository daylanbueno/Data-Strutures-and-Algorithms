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
}

const myLinkedList = new LikedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)

console.log(myLinkedList)