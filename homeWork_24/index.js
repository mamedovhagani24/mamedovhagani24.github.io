// N:1

function createRangeFilter(min, max) {

    return function (elem) {
        return elem >= min && elem <= max
    }
}

let array = [2, 2, 2, 3, 66, 5, 1]
let newArr = array.filter(createRangeFilter(2, 4))
console.log(newArr)

// N:2

const arr = [
    { name: "Vasya", surname: "Ivanov" },
    { name: "Vanya", surname: "Ivanov" },
    { name: "Albert", surname: "Vasyliev" },
];

function createKeyBy(propName) {

    return function (arr) {
        return arr.reduce((userByKey, arr) => {
            let objKey = arr[propName];

            if (!userByKey[objKey]) {
                userByKey[objKey] = [];
            }

            userByKey[objKey].push(arr);

            return userByKey;
        }, {});
    }
}

console.log(createKeyBy('surname')(arr))
console.log(createKeyBy('name')(arr))


// N:3
function createCalcPercent(percent) {
    return function calcPercent(value) {
        return value / 100 * percent
    }

}

console.log(createCalcPercent(30)(200))