class Animal {

    stomach = []
    constructor(legs) {
        this.legs = legs
    }

    eat(food) {
        this.stomach.push(food)
    }
}

class Vegatable {
    constructor(name) {
        this.name = name
    }
}

class Rabbit extends Animal {
    constructor(breed, legs) {
        super(legs)
        this.breed = breed
    }

    jump() {
        return `${this.breed} is jump`
    }

    eat(food) {
        if (food instanceof Vegatable) {
            this.stomach.push(food)
        } else {
            throw new Error('Это не еда')
        }
    }
}

class Snake extends Animal {
    constructor(isPoisonous, legs) {
        super(legs)
        this.isPoisonous = isPoisonous
    }

    crawl() {
        return `crawling now`
    }

    eat(food) {
        if (food instanceof Rabbit) {
            this.stomach.push(food)
        } else {
            throw new Error('Это не еда')
        }
    }

}

class Human extends Animal {
    constructor(firstName, lastName, legs) {
        super(legs)
        this.firstName = firstName
        this.lastName = lastName
    }

    walk() {
        return `${this.firstName} is walking`
    }

    greet() {
        return `${this.firstName} is greeting`
    }

    eat(food) {
        if (food instanceof Rabbit || food instanceof Snake || food instanceof Vegatable) {
            throw new Error('Это не еда')
        } else {
            this.stomach.push(food)
        }
    }
}


