// My soluction
function reverseString(str) {
    if (!str ||  typeof str !=='string') {
        return 'Hum is not so good'
    }

    let strReverse = []

    for (let i = str.length;  i >= 0; i--) {
        strReverse.push(str[i])
    }

    return strReverse.join('')
} 

// console.log(reverseString('Hi my name is Dailan'))


function reverseNumber1(str) {
   return str.split('').reverse().join('')
}

function reverseNumber3([...str]){
    return str.reverse().join('')
}

const reverseNumber4 = str => [...str].reverse().join('')


const reverseNumber5 = str => str.split('').reverse().join('')

console.log(reverseNumber4('Hi my name is Dailan'))