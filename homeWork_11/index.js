// task 10 -----------------------------------------

// const someValue = {}


// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }

//     return true
// }

// console.log(isEmpty(someValue))

// task 11 ---------------------------------------------

let obj = {
    "0": "zero",
    "42": "answer",
    "greeting": "Hello",
    "3.14": "PI",
    '1ksdlkwsk': 'Salam',
    "2.1x": 'salam'

}

function returnNUmberKey(obj) {

    for (let key in obj) {

        if (isNaN(key)) continue;

        console.log(obj[key])

    }
}


returnNUmberKey(obj)

// let salaries = {
//     HRs: { Alice: 500, Bob: 700 },
//     Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
//     QAs: { Chuck: 1650, Craig: 850, Dave: 3000 }

// };

// userPractic

// let obj = {

// }

// function addObj(o, k, v) {
//     return o[k] = v
// }

// addObj(obj, 'name', 'Xaqani')
// addObj(obj, 'surname', 'Mamedov')
// addObj(obj, 'age', 20)
// addObj(obj, 'nickName', 'Mike ')

// console.log(obj)