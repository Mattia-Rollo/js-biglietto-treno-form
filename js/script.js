/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

creare una variabile per registrare i km inseriti dall'utente
creare una vaiabile per gli anni inseriti dall'utente
li converto in numeri
creare una variabile che misura i km con il prezzo pee km 
creare variabili costanti per under18 e over 65
creare due variabili che mi calcolano lo sconto in base al prezzo e l'eta
creare un messaggio che inizialmente mi dice il prezzo

prendere l'elemento bottone con classe calcola 
applicare la funzione che mi cattura l'evento e avvia una funzione 

creare una funzione che
    se l'utente è minore di 18 mi applica lo sconto del 20% e mi scrive un messaggio che è stato applicato lo sconto
    se l'utente è maggiore di 65  applica lo sconto del 40 % e scrive un messaggio  




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
    const scontoOver65 = price * 0.4;
    let message = `Il prezzo del biglietto è di: `

    const myDiv = document.getElementById('messaggio');
    let newprice;
    console.log(typeof newprice);
    
    if (age < under18) {
        
        
        newprice = price - scontoUnder18;
        // console.log(typeof newprice);
        message += `${price.toFixed(2)} € ma in base alla tua età hai diritto a uno sconto del <span class="text-danger fw-bold bg-light rounded px-1">20%</span> quindi il totale è di: <span class="text-success fw-bold bg-light rounded px-1">${newprice.toFixed(2)} €</span>` ; 
        console.log(message);
        myDiv.innerHTML = message;
    } else
    if (age > over65) {

        newprice = price - scontoOver65;
        message += `${price.toFixed(2)} € ma in base alla tua età hai diritto a uno sconto del <span class="text-danger fw-bold bg-light rounded px-1">40%</span> quindi il totale è di: <span class="text-success fw-bold bg-light rounded px-1">${newprice.toFixed(2)} € </span>` ; 
        console.log(message);
        myDiv.innerHTML = message;
    } else {
        console.log(message);
        message += `<span class="text-success fw-bold bg-light rounded px-1">${price.toFixed(2)} €</span>`
        myDiv.innerHTML = message;
    }


}

btn.addEventListener('click', priceTicket);

