// Create a function, add(), that adds two numbers together and returns the sum

function add(num1,num2){
    let answer = num1 + num2
    return answer
}

console.log( add(3, 4)   ) // should log 7
console.log( add(9, 102) ) // should log 111

// Create a function, getFirst(arr), that returns the first item in the array

function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 2, 5])

console.log(firstCard)

// Call it with an array as an argument to verify that it works