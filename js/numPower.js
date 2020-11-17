/*
Funkcija: duoto skaiciaus kelimas kvadratu
pvz.: 2 -> 4
pvz.: 3 -> 9
pvz.: -4 -> 16
*/

function kvadratu(num) {
const rez = num * num;
return rez;
}
kvadratu(2);
kvadratu(3);
kvadratu(-4);

console.log( kvadratu(2));
console.log( kvadratu(3));
console.log( kvadratu(-4));
console.log( kvadratu(-5));

// galetu buti efektyviau
// const duKv = kvadratu(2)
// console.log(duKv);

function laipsnis(base, power) {
    let rez = 1;
    for (let i = 0; i < power; i++) {
        rez = rez * base;
    }
    return rez
}
const kubas2 = laipsnis(2, 3);
console.log(kubas2, '->', 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024);

const minus5 = laipsnis(-5, 3);
console.log(minus5, '->', -125);

function faktoringas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        rez = rez * i;
    }
    return rez;
}

const f0 = faktoringas(0);
const f1 = faktoringas(1);
const f2 = faktoringas(2);
const f3 = faktoringas(3);
const f4 = faktoringas(4);
const f5 = faktoringas (5);

console.log(f0, '->', 1);
console.log(f1, '->', 1);
console.log(f2, '->', 2);
console.log(f3, '->', 6);
console.log(f4, '->', 24);
console.log(f5, '->', 120);

function lyginisFaktoringas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            rez = rez * i;
        }
    }
    return rez;
}

const lf0 = lyginisFaktoringas(0);
const lf1 = lyginisFaktoringas(1);
const lf2 = lyginisFaktoringas(2);
const lf3 = lyginisFaktoringas(3);
const lf4 = lyginisFaktoringas(4);
const lf5 = lyginisFaktoringas(5);
const lf6 = lyginisFaktoringas(6);
const lf7 = lyginisFaktoringas(7);

console.log(lf0, '->', 1);
console.log(lf1, '->', 1);
console.log(lf2, '->', 2);
console.log(lf3, '->', 2);
console.log(lf4, '->', 8);
console.log(lf5, '->', 8);
console.log(lf6, '->', 48);
console.log(lf7, '->', 48);
