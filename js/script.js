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
let prezzo;
if (eta>65){
    //prezzo al km per gli over 65
    const prezzoKmAnziani = prezzoKm * 60 / 100;
    console.log('prezzo al km per gli over 65',prezzoKmAnziani);
    prezzo = km * prezzoKmAnziani;
    console.log('Il costo del biglietto è',prezzo);
} else if (eta<18){
    //prezzo al km per i minorenni
    const prezzoKmMinorenni = prezzoKm * 80 / 100;
    console.log('prezzo al km per i minorenni',prezzoKmMinorenni);
    prezzo = km * prezzoKmMinorenni;
    console.log('Il costo del biglietto è',prezzo);
} else {
    prezzo = km * prezzoKm;
    console.log('Il costo del biglietto è',prezzo);
}
//comunico il prezzo all'utente
prezzo = prezzo.toFixed(2);
document.getElementById('prezzo').innerHTML = `Il costo del tuo fantastico biglietto è di soli ${prezzo}€`;