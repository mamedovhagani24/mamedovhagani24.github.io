class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name
    }

    run(speed) {
        this.speed = speed
        return `${this.name} бежит со скоростью ${this.speed}`
    }

    
}