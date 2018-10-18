// var a;
// var b;
// var c;
// a = 30;
// b = 4;
// c = a + b;
// console.log(c);
// c = a - b;
// console.log(c);
// console.log(c = a / b);
// console.log(c = a * b);
// console.log(c = a % b);

// a = 12;
// a = a + 5;
// a = a + 5;
// console.log(a);

// a++;
// console.log(a);
// /*-------------------------------------*/
// console.clear;
// var a;
// var b;

// a = parseInt(prompt("a?", "000"));
// b = parseInt(prompt("b?", "000"));

// function add() {
//     var c; 
//     c="choucroute";
//     console.log(a+b);
//     console.log(c);
// };

// // console.log(c);
// // add();

// console.log(typeof(12));
// console.log(typeof(12.5));
// console.log(typeof("12"));
// console.log(typeof(true));


/*------------------------------------------------------------------------------

//déclarer les variables
var age;
var anneeFictive;
var anneeNaissance;
var ageFictive;
//demander l'age
age = parseInt(prompt("Quel Age avez vous ?"));
//demander l'année fictive
anneeFictive = parseInt(prompt("Une année dans le futur pour savoir votre âge à ce moment là?"))
//calcul de l'année
anneeNaissance = 2018 - age;
//calcul age fictif
ageFictive = (anneeFictive - anneeNaissance);
//Afficher les résultats
console.log("Vous êtes né en "+anneeNaissance);
console.log("En "+anneeFictive +" vous aurez " +ageFictive +" ans!");


-----------------------------------------------------------------------------------


//opérateurs logiques

console.log(1=="1");    //true
console.log(1==1);      //true
console.log(1==="1");   //false
console.log(1<=2);      //true
console.log(1>=2);      //false
console.log(1<2);       //true
console.log(1>2);       //false
console.log(1!=1);      //false
console.log(1!=="1");   //true

console.log(true && true);     //true
console.log(1==1 && 1<2);       //true

//ET

console.log(true && false);     //false
console.log(1==1 && 1>2);       //false

//OU

console.log(true || false);     //true
console.log(1==1 || 1>2);       //true
console.log(false|| false);       //false
console.log(1!=1 || 1>2);       //false

//Conditions


// "les chiffres sont égaux"

var a = 5;
var b = 5;

if (a==b) {
    console.log("les chiffres sont égaux");
}

//ELSE 
var a = 5;
var b = 5;

if (a==b) {
    console.log("les chiffres sont égaux");
}
else {
    console.log("les chiffres sont différents");
}

//"les chiffres sont égaux"

var a = 5;
var b = 7;

if (a==b) {
    console.log("les chiffres sont égaux");
}
else {
    console.log("les chiffres sont différents");
}
//"les chiffres sont différents"

--------------------------------------------------------


//déclarer les variables
var age;
var anneeFictive;
var anneeNaissance;
var ageFictive;
//demander l'age
age = parseInt(prompt("Quel Age avez vous ?"));
//demander l'année fictive
anneeFictive = parseInt(prompt("Une année dans le futur pour savoir votre âge à ce moment là?"))
//calcul de l'année
anneeNaissance = 2018 - age;
//calcul age fictif
ageFictive = (anneeFictive - anneeNaissance);
//Afficher les résultats
console.log("Vous êtes né en "+anneeNaissance);
console.log("En "+anneeFictive +" vous aurez " +ageFictive +" ans!");
if (age<=18) {
    console.log("Vous êtes mineur")
}
else {
    console.log("Vous êtes majeur!")
}


//"les chiffres sont différents"

var a = 5;
var b = 6;
var c = 7;

if (a == b) {
    console.log("a et b sont égaux");
} 
else if (a == c) {
    console.log("a et c sont égaux");
}
else if (b == c) {
    console.log("b et c sont égaux");
}
else {
    console.log("tous les chiffres sont différents");
}


*/

//déclarer les variables
var age;
var anneeFictive;
var anneeNaissance;
var ageFictive;
//demander l'age
age = parseInt(prompt("Quel Age avez vous ?"));
//demander l'année fictive
anneeFictive = parseInt(prompt("Une année dans le futur pour savoir votre âge à ce moment là?"))
//calcul de l'année
anneeNaissance = 2018 - age;
//calcul age fictif
ageFictive = (anneeFictive - anneeNaissance);
//Afficher les résultats
console.log("Vous êtes né en "+anneeNaissance);
console.log("En "+anneeFictive +" vous aurez " +ageFictive +" ans!");

if (age<=18) {
    console.log("Vous êtes mineur")
}
else if (age >=60 && age >= 18) {
    console.log("C'est la retraite !!!!")
}
else {
    console.log("Vous êtes majeur!")
}