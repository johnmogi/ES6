class Person{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

const p = new Person('john')
p.hello()