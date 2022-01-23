/*
 Given 2 arrays, create a function that let's a user know (true/false) 
 whether these two array contain any common items
 For exemple:
 const array1 = ['a', 'b', 'c', 'x']
 const array2 = ['z', 'y', 'i']
 shoulb return false.
 --------------------------------------------
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i','x']
should return true, because x  is common item.
 */

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
const array3 = ['z', 'y', 'x']

function containCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
}
// O(N^2) or O(a*b) - Time Complexity
// O(1) - Space complexity

// console.log('result', containCommonItem(array1, array3))


function containsCommonItem(arr1, arr2) {
    let map = {}
    
    for (let  i = 0; i < arr1.length; i ++) {
        if (!map[arr1]) {
            const item  = arr1[i];
            map[item] = true;
        }
    }

    console.log('map', map)

    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]])  {
            return true;
        }
    }
    return false
    // O(a+b) or O(n) Time complexity
    // O(n) space complexity
}

console.log('containsCommonItem ', containsCommonItem(array1, array2))

function containCommonItem2(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log('containCommonItem2 ', containCommonItem2(array1, array3))
