function random(min = 1, max = 10) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

console.log(random())