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

console.log("TrenItalia ti augura un buon viaggio!")