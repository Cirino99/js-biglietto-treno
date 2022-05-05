/*
    Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
    calcolare il prezzo del biglietto e comunicarglielo
*/
//prezzo al km
const prezzoKm = 0.21;
console.log('prezzo al km',prezzoKm);
//chiedo all'utente quanti km deve percorrere
const km = parseInt(prompt('Quanti km devi percorre col treno?'));
console.log('km da percorrere',km);
//chiedo l'età del passeggero
const eta = parseInt(prompt('Quanti anni ha il passeggero?'));
console.log('età del passeggero',eta);
//calcolo il prezzo del biglietto
let prezzo = km * prezzoKm;
if (eta>65){
    //prezzo al km per gli over 65
    const prezzoKmAnziani = prezzoKm * 60 / 100;
    console.log('prezzo al km per gli over 65',prezzoKmAnziani);
    prezzo = km * prezzoKmAnziani;
} else if (eta<18){
    //prezzo al km per i minorenni
    const prezzoKmMinorenni = prezzoKm * 80 / 100;
    console.log('prezzo al km per i minorenni',prezzoKmMinorenni);
    prezzo = km * prezzoKmMinorenni;
}
//comunico il prezzo all'utente
console.log('Il costo del biglietto è',prezzo);
prezzo = prezzo.toFixed(2);
document.getElementById('prezzo').innerHTML = `Il costo del tuo fantastico biglietto è di soli ${prezzo}€`;