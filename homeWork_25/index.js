const str = 'Hello World and Vasya';
console.log(str.reverse())

let arr1 = document.querySelectorAll('div')

let newArr1 = arr1.map((elem) => {
    return elem
})

console.log(newArr1)
console.log(arr1)



let arr2 = [-2, 4, -1, 0, 1]

let newArr2 = arr2.sort((a, b) => {
    return a < b ? -1 : 1
})
// console.log(arr)
console.log(arr2)
console.log(newArr2)