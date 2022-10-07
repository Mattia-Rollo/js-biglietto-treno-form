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
    let km = document.getElementById('km').value;
    console.log(km);

    let age = document.getElementById('age').value;
    km = parseInt(km);
    age = parseInt(age);
    console.log(km,age);
    
    const price = km * priceKm;
    console.log(typeof km);
    console.log(price);
    const under18 = 18;
    const over65 = 65;
    const scontoUnder18 = price * 0.2;
    const scontoUnder65 = price * 0.4;
    let message = `il prezzo del biglietto è di: ${price} €`

    if (age < under18) {
        
        let newprice = 0;
        newprice = price - scontoUnder18;
        message += ` ma in base alla tua età hai diritto a uno sconto del 20% e quindi il totale è di: ${newprice} €` ; 
        console.log(message);
    }
    if (age > over65) {
        let newprice = 0;
        newprice = price - scontoOver65;
        message += ` ma in base alla tua età hai diritto a uno sconto del 40% e quindi il totale è di: ${newprice} €` ; 
        console.log(message);
    }


}

btn.addEventListener('click', priceTicket);

