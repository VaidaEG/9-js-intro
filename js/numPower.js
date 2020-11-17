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
    return rez;
}
const kubas2 = laipsnis(2, 3);
console.log(kubas2, '->', 8);

const du10 = laipsnis(2, 10);
console.log(du10, '->', 1024);

const minus5 = laipsnis(-5, 3);
console.log(minus5, '->', -125);

function faktorialas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        rez = rez * i;
    }
    return rez;
}

const f0 = faktorialas(0);
const f1 = faktorialas(1);
const f2 = faktorialas(2);
const f3 = faktorialas(3);
const f4 = faktorialas(4);
const f5 = faktorialas (5);

console.log(f0, '->', 1);
console.log(f1, '->', 1);
console.log(f2, '->', 2);
console.log(f3, '->', 6);
console.log(f4, '->', 24);
console.log(f5, '->', 120);

function lyginisfaktorialas(n) {
    let rez = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            rez = rez * i;
        }
    }
    return rez;
}

const lf0 = lyginisfaktorialas(0);
const lf1 = lyginisfaktorialas(1);
const lf2 = lyginisfaktorialas(2);
const lf3 = lyginisfaktorialas(3);
const lf4 = lyginisfaktorialas(4);
const lf5 = lyginisfaktorialas(5);
const lf6 = lyginisfaktorialas(6);
const lf7 = lyginisfaktorialas(7);

console.log(lf0, '->', 1);
console.log(lf1, '->', 1);
console.log(lf2, '->', 2);
console.log(lf3, '->', 2);
console.log(lf4, '->', 8);
console.log(lf5, '->', 8);
console.log(lf6, '->', 48);
console.log(lf7, '->', 48);
