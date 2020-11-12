const kiek = 5;

for (let i = 0; i <= kiek; i++) {
   // logika 
   console.log('Labas rytas!', i);
}

let number = 7;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

number++;
console.log(number);

/*
Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?
*/

const alga = 5000;
const menesiu = 12;
const pajamos = 0;

for (let i=1; i <= menesiu; i++) {
console.log(`${i}) ${alga}`);
};

for (let i=1; i <= menesiu; i++) {
    console.log(`${i}) ${i * alga}`);
};

/*
Parasyti skaicius nuo 8 iki 4
*/
for (let i=8; i >= 4; i--){
    console.log(i);
}

/*
Isvardini ciferblato skaicius nuo duotos valandos iki galo
*/

const valanda = 3;
const maxValandu = 12;
for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + ' val');
}

/*
Duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
*/

const miestai = ['Vilnius', 'Kaunas', 'Klipeda', 'Alytus', 'Marijampole', 'Raseiniai', 'Nida'];

for(let i=0; i<miestai.length; i++ ) {
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestoPavadinimas}`);
}
