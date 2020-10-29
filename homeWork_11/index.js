const obj = {
    "0": "zero",
    "42": "answer",
    "greeting": "Hello",
    "3.14": "PI",

}

function showKeyByNumber(obj) {

    for (let key in obj) {

        if (isNaN(key)) continue;

        console.log(obj[key])

    }
}


showKeyByNumber(obj)

