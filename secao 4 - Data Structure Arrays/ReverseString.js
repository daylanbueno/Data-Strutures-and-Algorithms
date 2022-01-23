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

console.log(reverseString('Hi my name is Dailan'))
