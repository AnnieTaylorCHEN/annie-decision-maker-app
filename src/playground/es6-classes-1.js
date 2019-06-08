class Person {
    constructor(name = "anonymous", age = 0){
        this.name = name 
        this.age = age
    }

    getGreetings() {
        return `Hi, I am ${this.name}.`
    }

    getDescription() {
        let s = ''
        if (this.age > 1) {
            s = 's'
        }
        return `${this.name} is ${this.age} year${s} old.`
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
        }

    hasHomeLocation(){
        return !!this.homeLocation
    }
    
    getGreetings() {
        let greetings = super.getGreetings()
        if (this.hasHomeLocation()) {
            greetings += `I am visiting from ${this.homeLocation}.`
        }
        return greetings
    }
}
const me = new Traveler ('Annie', 35, 'Stockholm')
console.log(me.getGreetings())

const otherPerson = new Traveler ()
console.log(otherPerson.getGreetings())