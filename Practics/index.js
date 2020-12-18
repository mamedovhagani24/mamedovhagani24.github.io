let animal = {
    eats: true,
}

let rabbit = Object.create(animal)

console.log(rabbit)
console.log(Object.getPrototypeOf(rabbit))
console.log(Object.getPrototypeOf(rabbit))

Object.setPrototypeOf(rabbit, {
    walk() {
        return 'this rabbit is walk'
    }
})

console.log(rabbit.walk())