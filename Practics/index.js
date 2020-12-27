const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
}

function sumSalaries(obj) {
    let sum = 0
    let arr = Object.values(obj)

    for (let key of arr) {
        sum += key
    }

    return sum
}


console.log(sumSalaries(salaries))