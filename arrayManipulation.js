function processArray(numbers) {
    let number = []

    for (let i of numbers) {
        if (i%2 === 0) {
            number[number.length] = i * i
        } else {
            number[number.length] = i * 3
        }
    }
    return number
}

console.log(processArray([2,5,3,1,6,7,8]));