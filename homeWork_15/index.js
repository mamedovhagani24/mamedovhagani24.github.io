// Method for ... of (1)
// ------------------------------------------

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sumNumbers(numArr) {

    let sum = 0;

    for(let value of numArr) sum += value

    return sum
}

console.log(sumNumbers(numArr))

// Method map (1)
// ------------------------------------------------- 


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sumNumbers(numArr) {
    
    const sumArr = numArr.reduce((sum, elem) => sum + elem, 0)

    return sumArr

}

console.log(sumNumbers(numArr))

// Method for ... of (2)
// ------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];

function mapToUpperCase(arr) {

    let newArr = []

    for (let value of arr) newArr.push(value.toUpperCase())

    return newArr
}

console.log(mapToUpperCase(fruits))

// Method map (2)
// ------------------------------------------------- 

const fruits = ["Banana", "Orange", "Apple", "Mango"];

function mapToUpperCase(arr) {

    const newArr = arr.map((elem) => elem.toUpperCase())

    return newArr
}

console.log(mapToUpperCase(fruits))