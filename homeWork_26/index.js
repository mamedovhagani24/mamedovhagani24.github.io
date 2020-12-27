class Vegatable {
    constructor(name) {
        this.name = name
    }
}


class Animal {


    constructor(legs) {
        this.legs = legs
        this.stomach = []
    }

    eat(food) {
        this.stomach.push(food)
    }
}

class Rabbit extends Animal {
    constructor(breed) {
        super(4)
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
    constructor(isPoisonous) {
        super(0)
        this.isPoisonous = isPoisonous
    }

    crawl() {
        return `crawling now`
    }

    eat(food) {
        if (!(food instanceof Rabbit)) {
            throw new Error('Это не еда')
        }
        super.eat(food)
    }

}

class Human extends Animal {
    constructor(firstName, lastName) {
        super(2)
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
        if (!(food instanceof Human)) {
            this.stomach.push(food)
        }

        super.eat(food)
    }
}


const human1 = new Human('Vasya', 'Ivanov')
console.log(human1)