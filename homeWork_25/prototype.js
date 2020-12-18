String.prototype.reverse = function () {
    const elemArr = this.split('')

    elemArr.reverse();

    return elemArr.join('')
}

Array.prototype.sort = function () {

    let arr = [...this]

    let newArr = Object.keys(arr.reduce((arc, value) => {
        arc[value] = value

        return arc
    }, {})).map(val => +val ? +val : val);

    return newArr
}

NodeList.prototype.map = Array.prototype.map
NodeList.prototype.find = Array.prototype.find
NodeList.prototype.reduce = Array.prototype.reduce
