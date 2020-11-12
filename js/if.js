/*
Palyginimo salyga (if)
galimi opreatoriai: >, <, >=, <=, ==, !=, ===, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=
*/

/*
Galimos strukturos:
if () {};
if () {} else {};
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}

*/
const accountBalance = 200;
const transfer = 200;

// if (accountBalance < transfer) {
//     console.log('Banko zinute: saskaitoje truksta pinigu.');
// }
// if (accountBalance >= transfer) {
// console.log('Banko zinutė: pavedimas padarytas.');
//}

if (accountBalance >= transfer) {
    console.log('Banko zinutė: pavedimas padarytas.');   
} else {
    console.log('Banko zinute: saskaitoje truksta pinigu.');
}

const akys = 'melynos';
if (akys == 'melynos') {
    console.log ('Grazios sirdies zmogus');
} else if (akys == 'zalios') {
    console.log('Melagiai...');
} else if (akys == 'Raudonos') {
    console.log('Programuotojas');
} else {
    console.log('Ar tu turi akis?');
}

console.log('Pirmas bandymas baigtas. Kas toliau?');

const akys2 = 'zalios';

if (akys2 == 'melynos') {
    console.log('Grazios sirdies zmogus');
} else {
    if (akys2 == 'zalios') {
        console.log('Melagiai...❤️');
    } else if (akys2 == 'raudonos') {
        console.log('Programuotojas');
    } else {
        console.log('Ar tu turi akis?');
    };
}

const pirmas = 8;
const antras = '8';
if (pirmas === antras) {
    console.log(true);
} else {
    console.log(false);
}

//Negalima lyginti teksto
// const zodis1 = 'A';
// const zodis2 = 'b';
// if (zodis1 < zodis2) {
//     console.log(true);
// } else {
//     console.log(false);
// }	