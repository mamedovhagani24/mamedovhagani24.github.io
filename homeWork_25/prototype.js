String.prototype.reverse = function () {
    const elemArr = this.split('')

    elemArr.reverse();

    return elemArr.join('')
}

Array.prototype.sorted = Array.prototype.sort
Array.prototype.sort = function (arguments) {
    const arr = [...this];
    return arr.sorted(arguments)

}

NodeList.prototype.map = Array.prototype.map
NodeList.prototype.find = Array.prototype.find
NodeList.prototype.reduce = Array.prototype.reduce
