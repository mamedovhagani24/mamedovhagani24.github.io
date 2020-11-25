'use strict'

// function isTrue(relation) {
//     console.log(eval(relation))
// }

// isTrue('2 > 3')
// isTrue('2 == 2')

let firstArray = [[1, 2], [5, 6]]
let secondArray = [[3, 4]]

function tuckIn(arr1, arr2) {
    return arr1.concat(arr2).sort((firstElem, secondElem) => {
        return firstElem - secondElem
    })
}

console.log(tuckIn(firstArray, secondArray))