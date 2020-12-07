let obj = {
    name: 'Xaqani',
    surname: 'Mamedov',
    age: 20,
    about: {
        city: 'Kharkiv',
        isAdmin: [
            true, 20
        ]
    }
}



function cloneObj(obj) {
    const newObj = {}
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            newObj[key] = cloneObj(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}


console.log(cloneObj(obj))

obj.about.isAdmin.isTrue = false

console.log(obj)
