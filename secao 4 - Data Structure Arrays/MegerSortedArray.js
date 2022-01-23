
// check parameter
// merge  array
// sorted array 

function mergeSortedArrayMySoluction(arr1, arr2) {
    const sortedArray = [...arr1, ...arr2]
    for (let i = 0;  i < sortedArray.length; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[i]) {
                const valueItemJ = sortedArray[j] 
                sortedArray[j]  = sortedArray[i] 
                sortedArray[i] = valueItemJ
            }
        }
    }
    return sortedArray
} // N(N^2) no so good soluction.

function otherSoluction(arr1, arr2) {
    return [...arr1, ...arr2].sort((a,b) => a-b)
}


console.log(otherSoluction([56,3,0,31],[4,6,30]))