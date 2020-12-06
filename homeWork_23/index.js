let obj = {
    name: 'Xaqani',
    surname: 'Mamedov',
    age: 20,
    about: {
        city: 'Kharkiv'
    }
}


function cloneObj(obj, newObj = {}) {
    for(let key in obj) {
        if(typeof obj[key] == 'object') {
            newObj[key] = cloneObj(obj[key], Array.isArray(obj[key]) ? [] : {})
        } else {
            newObj[key] = obj[key]
        }
    }

    return newObj
}


console.log(cloneObj(obj))
