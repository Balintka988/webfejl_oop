function fun(param){
    console.log(param.nev);
}

fun({nev:"cirmi"})

const csirke = fun;
csirke({nev:"Petra"})

const funA = function(param){
    console.log(param.nev)
}
funA({nev:"Károly"});

const funB = function(){
    console.log(this.nev)
}

const tojas = funB.bind({nev:"Géza"});
tojas();

const funC = (param) => {
    console.log(param.nev)
}
//---------------------------------
const obj = {
    funA: (param) => {
        console.log(param.nev);
    },
    funB: (param) => {
        console.log(param.eletkor);
    }
}
const pers = {
    nev: "Orlen",
    eletkor: 17
}
obj.funA(pers);
obj.funB(pers);