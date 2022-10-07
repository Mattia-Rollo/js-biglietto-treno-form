/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

creao una variabile per registrare i km inseriti dall'utente
creo una vaiabile per gli anni inseriti dall'utente
li converto in numeri



*/
"use strict"

const btn = document.getElementById('calcola');



const priceTicket = function () {
    
    const priceKm = 0.21;
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    parseInt(km);
    console.log(km);
    
    const price = km * priceKm;
    console.log(typeof km);
    console.log(price);

}

btn.addEventListener('click', priceTicket);

