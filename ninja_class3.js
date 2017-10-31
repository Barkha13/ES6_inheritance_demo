class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName(){
        console.log(`Ninja name is ${this.name}`);
    }
    showStats(){
        console.log(`Ninja Speed: ${this.speed}---Health: ${this.health}---Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health +=10;
        console.log(`Ninja Healh: ${this.health}`);
    }
}

let ninja1 = new Ninja("zukashimerika");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        console.log(`Ninja Speed: ${this.speed}---Health: ${this.health}---Strength: ${this.strength}---Wisdom:${this.wisdom}`);
    
    }
}

let sensei1 = new Sensei("Master Solitner")
sensei1.speakWisdom();
sensei1.showStats();