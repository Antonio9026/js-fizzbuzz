// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

// **BONUS 1:**
// Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
// **BONUS 2:**
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


let container = document.getElementById("container")
const box = 10 * 10;
// creo un ciclo per stampare in console i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
   const box = document.createElement("div");
   box.classList.add("child")

    // creo condizione per stampare in console se multipli di 3 "fizz",se multipli di 5 "buzz",se multipli di 15 "fizzbuzz",
    // creo condizione per stampare in console se multipli di 3
   if (i % 15 === 0) {
    box.innerHTML += "fizzbuzz";
    box.style.borderRadius = "20px  20px 0"
    box.style.backgroundColor = "#DDA0DD"
   }else if (i % 5 === 0) {
    box.innerHTML +="buzz";
    box.style.borderRadius = "0 20px  20px "
    box.style.backgroundColor = "#4B0082"
   }else if (i % 3 === 0) {
    box.innerHTML += "fizz";
    box.style.borderRadius = " 20px 0 20px "
    box.style.backgroundColor = "#8A2BE2"
   }else{
    box.innerHTML += (i);
    box.style.borderRadius = " 30px  20px 10px"
    box.style.backgroundColor = "#FF00FF"
    
   }
 
   container.append(box)
}