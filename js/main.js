//spausdiname sveikaji skaiciu
console.log(845455);

//dus skaiciai vs desimtainis kaip veikia ir koks yra kablelis
console.log(3, 14);
console.log(3.14);

//kaip spausdinamas tekstas
console.log("Labas rytas");
console.log('Labas rytas');

/*KINTAMIEJI
*****************************************/
/* Iniciavimo budai:
    const - default, tai musu pirmas pasirinkimas
    let - galima, tik jei yra reikalas keisti reiksme;
    var - nenaudotinas;
*/
/* Kintamuju tipai (pagal reiksmes):
    skaiciai (number) - 2020, 3.14, -7, -5.144
    tekstai (string) - "labas", 'ka tu?', ";)", '';
    logines (boolean) - true, false
    sarasai (array) - []
    objektai (object) - {}
*/
const pirmasisSkaicius = 2;
const antrasisSkaicius = 3;

console.log("Pirmasis skaicius turetu buti 2.");
console.log(pirmasisSkaicius);

console.log("Antras skaicius turetu buti 3");
console.log(antrasisSkaicius);

const suma = pirmasisSkaicius + antrasisSkaicius;

console.log(suma);
console.log(pirmasisSkaicius,'+',antrasisSkaicius,'=', suma);

const vardas = 'Vardenis';
const amzius = 99;
console.log(vardas);
console.log(amzius);

const sakinys = vardas + ' yra ' + amzius + ' metu amziaus.';
console.log(sakinys);
const suo = 'Rikis'
const maistas = 'kaulas';
//Rikis megstamas maistas yra kaulas
console.log(suo);
console.log(maistas);

const sakinys2 = suo + ' megstamas maistas yra ' + maistas + '.';
console.log(sakinys2);

const heroName = 'Chuck';
const heroLastname='Norris'
const birth = 1940;
const currentYear = 2020;
const age = currentYear - birth;

// Chuck Norris (80);
const sakinys3 = heroName + ' ' + heroLastname + ' (' + age + ')';
console.log(sakinys3);

// Jo vardas: Chuck.

console.clear();

let pinigine = 7;
const sausis = 100;
const vasaris = 200;
const kovas = 70;

//100
//300
//370
//const sausioPajamos = pinigine + sausis;
//console.log(sausioPajamos);

//const vasarioPajamos = sausioPajamos + vasaris;
//console.log(vasarioPajamos);

//const kovoPajamos = vasarioPajamos + kovas;
//console.log(kovoPajamos);

pinigine = pinigine + sausis;
console.log(pinigine);

pinigine = pinigine + vasaris;
console.log(pinigine);

pinigine = pinigine + kovas;
console.log(pinigine);

