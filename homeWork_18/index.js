function capitalize(string) {
    const strArr = string.split(' ')

    let result = strArr.reduce((res, current) => {
        return res + (" " + current[0].toUpperCase() + current.slice(1))
    }, '')

    return result
}

console.log(capitalize('my name is Cat'))

function capitalize(string) {
    const strArr = string.split(' ')

    let result = strArr.map((current) => {
        return current[0].toUpperCase() + current.slice(1)
    })

    return result.join(' ')
}

console.log(capitalize('my name is Cat'))

// second

function checkSubstring(string, substring) {
    return string.toLowerCase().includes(substring.toLowerCase())
}

console.log(checkSubstring('Hello World', 'world'))