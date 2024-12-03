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

/**
 * a player osztály egy játékost hoz létre, neki vagy egy nickname-e, számoljuk azt, hogy 
 * hány meccset játszott és ez alapján megnézzük hogy milyen szinten van(tier)
 */
class Player{

    constructor(nickname){
        this.nickname = nickname;
        this.playedMatch = 0;//itt adjuk meg hogy egyenlőre nem játszott meccset
    }

    play () {//ez a metódus mindig amikor meg lesz hívva hozzáad 1et a playedMatch-hez
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch);//kiirja a nevet és az aktuális meccsek számát
    }
    /**
     * //itt ellenőrizzük hogy milyen tierbe fog kerülni a játékosunk, a playedMatchet vetjük össze egy számmal
     * @returns {"A"|"B"|"C"} A szintek nevei
     */
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
    PrintTierLevel(){//egyszerű minden meghívásnál
        console.log(this.nickname, this.getTierLevel());
    }
}


/*
*9.feladat: player osztálynak egy példányát hozzuk itt létre
*/
const player = new Player("player1")
player.play();
player.play();
player.play();
console.log(player.getTierLevel());
player.PrintTierLevel();
//-----------------------------Itthoni------------------
/*
*Egy osztályt csinálunk ami eltárolja egy személy nevét és később iskoláját is
*/
class Person {
    constructor(name){
        this.name = name;
    }
    /**
     *A személy nevét itt adja vissza
    * @returns {string}
    */
    getName(){
        return this.name;
    }
}
/**
 * Egy bővített osztály ami már az iskolát is tárolja és a Person osztályt bővíti, annak a leszármazottja
 */
class Student extends Person{
    constructor(school, name){
        super(name);//meghívjuk annak az osztálynak a konstruktorát amiből származik(ősosztályt)
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