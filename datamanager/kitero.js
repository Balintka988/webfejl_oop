const sum1 = (a, b) => {
    return a+b;
}
console.log(sum1(3, 4));

const obj = {

}
obj.calculate1 = sum1;
console.log(obj.calculate1(3,6));
//----------------------------------
obj.calculate2 = (calcAB) => {
    const a = 3;
    const b = 4;
    const sum = calcAB(a,b);
    return sum;
}
const res1 = obj.calculate2((szam1, szam2) => {
    return szam1 + szam2;
})
console.log(res1)

const res2 = obj.calculate2((szam1, szam2) => {
    return szam1 - szam2;
})
console.log(res2)
//---------------------
obj.calculate3 = (a, b, cb) => {
    const res = cb(a, b);
    return res;
}
const res3 = obj.calculate3(7, 8,(szam1, szam2) => {
    return szam1*szam2;
})
console.log(res3);
//----------------------------------
const theFunction = () => {
    const a = 10;
    const res4 = obj.calculate2((szam1, szam2) => {
        return szam1* a + szam2;
    });
    console.log(res4);
}
theFunction();