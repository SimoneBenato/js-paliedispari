// Palidroma

// Chiedere all’utente di inserire una parola
var parolaUtente = prompt("inserisci una parola");
console.log(parolaUtente);

// Creare una funzione per capire se la parola inserita è palindroma
function palindroma(stringa) {
	var lowerstringa = stringa.toLowerCase();
	var result = lowerstringa.split("").reverse().join("");
	if (lowerstringa == result) {
		return stringa + " " + "è una parola palindroma";
	} else {
		return stringa + " " + "non è una parola palindroma";
	} 	
}
console.log(palindroma(parolaUtente));


// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// function randomNumber(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }
// cpuNumb = randomNumber(1, 6);

// console.log(cpuNumb);

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// Dichiariamo chi ha vinto.
