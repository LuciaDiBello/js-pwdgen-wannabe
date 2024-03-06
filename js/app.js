
const nome=prompt('Inserisci il tuo nome');  // string | null
const cognome=prompt('Inserisci il tuo cognome');  //string | null
const colorePreferito=prompt('Inserisci il tuo colore preferito');  //string | null

let password=nome+cognome+colorePreferito+9;  //string 
console.log('password: ', password);


const randomFloat=Math.random();   // numero casuale compreso tra 0 e 1 escluso 
console.log(randomFloat);    

const randomFloat100=randomFloat*100;   //numero compreso tra 0 e 100 escluso
console.log(randomFloat100);

let randomGreater=Math.ceil(randomFloat100);  //approssima al numero intero più grande
console.log(randomGreater);

let randomLess=Math.floor(randomFloat100);  //approssima al numero intero più piccolo
console.log(randomLess);

let randomRound=Math.round(randomFloat100);  //arrotonda per eccesso se la parte decimale è maggiore o uguale a 5 
console.log(randomRound);

password=nome+cognome+colorePreferito+randomRound;
console.log('password: ', password);