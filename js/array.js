console.log("bla bla");
/*
Saraso tipo kintamieji:
    sinonimai: sarasas, masyvas, array, matrica*
    inicijuojami su lauztiniais skliausteliais;
    viduje gali buti ivairiu tipu reiksmiu, bet rekomenduotina, kad butu tik vieno tipo reiksmes.
*/

//Pazymiai
//petriukoPazymiai = 2, 10, 7, 5;

const petriukoPazymiai = [2, 10, 7, 5];
console.log(petriukoPazymiai);

// kaip suskaiciuoti pazymiu vidurki?
let suma = 0;
suma = suma + petriukoPazymiai[0];
suma = suma + petriukoPazymiai[1];
suma = suma + petriukoPazymiai[2];
suma = suma + petriukoPazymiai[3];

const kiekis = petriukoPazymiai.length;
const vidurkis = suma / kiekis;

console.log(vidurkis);

const mietai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];
console.log(mietai);
console.log(mietai[3]);
console.log(mietai[1]);
console.log(mietai[2]);
console.log(mietai[4]);