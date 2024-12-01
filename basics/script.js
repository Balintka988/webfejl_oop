///*
//*5.feladat
//*/
//function Player(nickname){
//    this.nickname = nickname;
//    this.playedMatch = 0;
//}
//
///*
//*6.feladat
//*/
//Player.prototype.play = function () {
//    this.playedMatch++;
//    console.log(this.nickname, this.playedMatch);
//}
///*
//*7.feladat
//*/
//Player.prototype.getTierLevel = function(){
//    if(this.playedMatch <= 3){
//        return "A";
//    }
//    if(this.playedMatch <= 6){
//        return "B";
//    }
//    else{
//        return "C"
//    }
//}
///*
//*8.feladat átalakítva
//*/
//function PrintTierLevel(player){
//    console.log(player.nickname, player.getTierLevel());
//}

class Player{

    constructor(nickname){
        this.nickname = nickname;
        this.playedMatch = 0;
    }

    play () {
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch);
    }

    getTierLevel (){
        if(this.playedMatch <= 3){
            return "A";
        }
        if(this.playedMatch <= 6){
            return "B";
        }
        else{
            return "C"
        }
    }
}

/*
*9.feladat
*/
const player = new Player("player1")
player.play();
player.play();
player.play();
console.log(player.getTierLevel());
//-----------------------------Itthoni------------------
class Person {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Student extends Person{
    constructor(school, name){
        super(name);
        this.school = school;
    }
}


const student1 = new Student("bolyai", "Géza");

console.log(student1.getName());
console.log(student1.school);

class Animal {
    constructor(name){
        this.name = name;
    }
    sound(){
        console.log(`${this.name} képes hangot kiadni`);
    }
}

class Bird extends Animal{
    constructor(name){
        super(name);
    }
    repul(){
        console.log(`${this.name} repül`);
    }
}

class Mammal extends Animal{
    constructor(name){
        super(name);
    }
    seta(){
        console.log(`${this.name} tud sétálni`);
    }
}
const madar1 = new Bird("cinege");
madar1.sound();
madar1.repul();

const emlos1 = new Mammal("macska");
emlos1.sound();
emlos1.seta();