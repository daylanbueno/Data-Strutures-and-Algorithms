
// create a function finsRecursion(array)
// create for to interate in arry
// crate arry to verify number array return

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,3,5,1,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurring(arr) {
    for(let i = 0; i< arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i]
            }
        }
    }
    return  undefined
} 

function firstRecurring2(input) {

   let map = {}

   for (let i = 0; i < input.length; i++) {
       const inputValue  = input[i]
       if (map[inputValue] !== undefined) {
           return input[i]
       }
       map[inputValue] = i
   }
   return undefined
} 

console.log(firstRecurring2([2,5,2,5,3,5,1,2,4]))