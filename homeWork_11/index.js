const obj = {
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

