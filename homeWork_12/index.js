const salaries = {
    HRs: { Alice: 500, Bob: 700 },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000 }
};

let newSalaries = {}

for (let key in salaries) {
    for (let value in salaries[key]) {
        newSalaries[key] = {...salaries[key]}
        newSalaries[key][value] *= 2

    }
}

console.log(newSalaries)

console.log(salaries)