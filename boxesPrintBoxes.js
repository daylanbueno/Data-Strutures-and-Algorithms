const boxes = [1,2,3,4,5]

function longAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

longAllPairsOfArray(boxes)

//O(n²) // O(n^2)