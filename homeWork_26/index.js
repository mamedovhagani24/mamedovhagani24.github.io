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
        if (!(food instanceof Vegetable)) throw new Error(`Rabbit don't eat this food`);

        super.eat(food);
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
            throw new Error("Snake don't eat this food")
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
        if (food instanceof Human) {
            throw new Error('Human does not eat Human')
        } else if (food instanceof Snake || food instanceof Rabbit || food instanceof Vegatable) {
            super.eat(food)
        } else {
            throw new Error('Это не еда')
        }

    }
}

const tomato = new Vegatable('tomato')
const orange = new Vegatable('orange')
const human1 = new Human('Vasya', 'Ivanov')
const human2 = new Human('Vanya', 'Vasil')
const rabbit1 = new Rabbit('white')
const rabbit2 = new Rabbit('black')
const snake1 = new Snake('black')
const snake2 = new Snake('black')

snake1.eat(rabbit1)
human1.eat("dd")
console.log(human1)
