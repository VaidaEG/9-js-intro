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

/*
Isvardinti saraso narius is galo
*/

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

for (let i = abc.length - 1; i >= 0; i--) {
    console.log(abc[i]);
}

console.clear();

const text = 'dodekahedronas';

console.log(text);

console.log(text.length);

for (let i=0; i < text.length; i++) {
    console.log(text[i]);
}

const text1 = 'dodekahedronas';

console.log(text1);

console.log(text1.length);

for (let i=0; i < text1.length; i++) {
    console.log(text1[i]);
}

/*
Duotas zodis ir is jo reikia isrinkti kas antra raide ir ispausdinti.
Pvz.: abcdef -> bdf
*/

const text2 = 'orangutangas';
console.log(text2);
let atsakymas = '';

for (let i=1; i < text2.length; i=i+2) {
    const raide = text2[i];
    atsakymas = atsakymas + raide;
    console.log(raide);
}
console.log(atsakymas);

const zodis = 'pomidoras';
const step = 2;
const pirmosRaidesPozicija = step -1;
let rez = '';

for (let i = step - 1; i < zodis.length; i=i+step) {
    const raide = zodis[i];
    console.log(raide);
    rez = rez + raide;
}
console.log(rez);

const word = 'kalakutas';
const step2 = 3;
const firstLetterPos = step2 -1;
let output = '';

for (let i = step2 - 1; i < word.length; i=i+step2) {
    const letter = word[i];
    console.log(letter);
    output = output + letter;
}
console.log(output);
