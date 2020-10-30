function Cat(name, breed) {
    this.name = name
    this.breed = breed

    this.meow = function () {
        console.log('Мяу!')
    }
}

function User(firstName, lastName, age) {
    this.firtName = firstName
    this.lastName = lastName
    this.age = age

    this.greet = function() {
        console.log(`Hello ${this.firtName}`)
    }
}