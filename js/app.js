console.log("works!")

let age = prompt ("Quanti anni hai?")
let distance = prompt ("Quanti chilometri devi percorrere?")
const kmCost = 0.21

let trainPrice = distance * kmCost 
console.log("il tuo biglietto costerà euro:", trainPrice )

if (age < 18){
    console.log("Sei minorenne, hai diritto ad uno sconto!")
    let discountedTicketYoung = trainPrice - (trainPrice * 20 / 100)
    console.log("il tuo biglietto con lo sconto costerà euro:", discountedTicketYoung)
} else if (age > 65) {
    console.log("Sei un pensionato, hai diritto ad uno sconto!")
    let discountedTicketOld = trainPrice - (trainPrice * 40 / 100)
    console.log("il tuo biglietto con lo sconto costerà euro:", discountedTicketOld)
}

// data biglietto

console.log("TrenItalia ti augura un buon viaggio!")

const dataBiglietto = document.getElementById("data")

let data = prompt("Che giorno vuoi partire?");

dataBiglietto.innerHTML = data

// orario biglietto

const oraBiglietto = document.getElementById("ora")

let ora = prompt("A che ora vuoi partire?");

oraBiglietto.innerHTML = ora

// nome biglietto

const nomeBiglietto = document.getElementById("nome")

let nome = prompt("Come ti chiami?");

nomeBiglietto.innerHTML = nome


// cognome biglietto

const cognomeBiglietto = document.getElementById("cognome")

let cognome = prompt("E il tuo cognome?");

cognomeBiglietto.innerHTML = cognome

// età biglietto

const etaBiglietto = document.getElementById("eta")

etaBiglietto.innerHTML = age

// distanza biglietto

const distanzaBiglietto = document.getElementById("distanza")

distanzaBiglietto.innerHTML = distance

// sconto biglietto

const scontoBiglietto = document.getElementById("sconto")

if (age < 18 ) or (age > 65) {
    scontoBiglietto.innerHTML = true
} else {
    scontoBiglietto.innerHTML = false
}

// prezzo biglietto

const prezzoBiglietto = document.getElementById("prezzo")

if (age < 18 ) {
    prezzoBiglietto.innerHTML = discountedTicketYoung
} else if (age > 65){
    prezzoBiglietto.innerHTML = discountedTicketOld
} else {
    prezzoBiglietto.innerHTML = trainPrice
}
