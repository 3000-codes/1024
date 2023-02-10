export default class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello ${this.name}`);
    }
}