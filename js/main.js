// Palidroma

// Chiedere all’utente di inserire una parola
// var parolaUtente = prompt("inserisci una parola");
// console.log(parolaUtente);

// // Creare una funzione per capire se la parola inserita è palindroma
// function palindroma(stringa) {
// 	var lowerstringa = stringa.toLowerCase();
// 	var result = lowerstringa.split("").reverse().join("");
// 	if (lowerstringa == result) {
// 		return stringa + " " + "è una parola palindroma";
// 	} else {
// 		return stringa + " " + "non è una parola palindroma";
// 	} 	
// }
// console.log(palindroma(parolaUtente));

// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var userNumber;
var pariDispari; 

do {
	pariDispari = prompt("Inserisci pari o dispari");
	var lowerPariDispari = pariDispari.toLowerCase();
} while ((lowerPariDispari != "pari") && (lowerPariDispari != "dispari"));
console.log(lowerPariDispari);

do {
	userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while ((userNumber < 1) || (userNumber > 5) || (isNaN(userNumber)));
console.log(userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
cpuNumb = randomNumber(1, 6);
console.log(cpuNumb);

// // Sommiamo i due numeri
function somma(num1, num2) {
	var somma = num1 + num2;
	return somma;
}
var somma = somma(cpuNumb, userNumber);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pd(num1) {
	var check; 
	if (num1 % 2 == 0)  {
		check = "pari";
	} else {
		check = "dispari";
	}
	return check;
}

// Dichiariamo chi ha vinto
var vincitore = pd(somma);

if (vincitore == pariDispari) {
	console.log("Hai vinto");
} else {
	console.log("Hai perso");
}





