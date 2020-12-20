class Vegatable {
    constructor(name) {
        this.name = name
    }
}

class Animal {

    stomach = []
    constructor(legs) {
        this.legs = legs
    }

    set eat(foot) {
        this.stomach.push(foot)
    }

    get eat() {
        this.stomach
    }
}

class Rabbit extends Animal {

    constructor(breed) {

        super(legs)
        this.breed = breed

    }


}

let rabbit1 = new Rabbit('Белый великан')