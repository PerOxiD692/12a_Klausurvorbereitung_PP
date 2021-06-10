/* DATENSTRUKTUREN */

/* Primitives */

// let a; // Variable - Definition oder Deklaration

// a = true; // boolean (true, false)
// a= "Hallo"; // sting (Hier Primitiv)
// a= 2; // number

// console.log(a);
// console.log(typeof a);

/* Arrays */
//let arr = new Array();

// let arr;
// arr = [false, true, false];
// arr = ["a", "b", "c", "d"]; //
// // Index beginnt bei 0!
//  console.log(arr);
//  console.log(typeof arr);
//  console.log(arr.length);
//  console.log(arr[3]);
//  console.log(arr[arr.length-1]); //letztes Element

/* Array - Info */
// let arr = [];
// console.log(arr);
// arr.push("a"); // Hinten im Array anfügen
// console.log(arr);
// arr.push("b"); // Hinten im Array anfügen
// console.log(arr);
// console.log(arr.pop()); // Hinterstes Element des Arrays entfernen und ausgeben
// console.log(arr);
// arr.pop();  // Hinterstes Element des Arrays entfernen
// console.log(arr);

/* Objekte */
// let obj;
// // obj = {};
// // console.log(obj);

// // obj = {x:10, y:"Hallo", z:true};
// // console.log(obj);
// // console.log(obj.y); //Punktnonation, Dot Syntax, Dot notation

// obj = {
//             sub1:{
//                 val1: "hi",
//                 val2: 2
//             }
// };
// // {{{ ... }}} -> nested object
// console.log(obj);
// console.log(obj.sub1.val1);
// console.log(obj.sub1.val2);

/*  DOM - Document Object Model */ // Modell der HTML-Struktur 
// console.log(document); //gibt den ganzen HTML Code aus#
// console.log(document.body); // gibt nur den <body> aus
// console.log(document.body.children); // <body> ... </body>
// console.log(document.body.children[0]); // h1
// console.log(document.body.children[0].innerHTML); // ... Text
// document.body.children[0].innerHTML = "Hallo, ich habe dich geändert!"; // h1 geändert!
// console.log(document.getElementById("test")); // <p>
// console.log(document.getElementById("test").innerHTML); 

/* Entscheidungsstrukturen */
// let cond;

// cond = (6 > 4);
// cond = (6 < 4);
// cond = (4 == 4); //Test auf Wert
// cond = (4 == 4); //Test auf Wert und Typ
// console.log(cond);

// if (6 > 4) {
//     console.log("Die Aussage ist Wahr");
// }
// // else if ()
// else{
//     console.log("Die Aussage ist Falsch");
// }

// Switch

/* Funktionen */

// 1. Kapselung
// test (); // Funktionscall
// function test () { //funktion
//     console.log("Testaufgabe");
// }

// 2. Return
// console.log(test()); //call
// function test () //Funktionsrumpf
// {
//     //macht irgendwas
//     let ausgabe = "Testaufgabe";
//     return ausgabe; // Lieferung an die Stelle des Calls
//     console.log("Hallo"); // nach returun wird eine Funktion abgebrochen!
// }

// 3.  Parameter
// console.log(test("Anna")); //Argument(e)
// function test(firstName) //Parameter (p1,p2,...,pN)
// {
//     // ... macht irgendwas
//     let ausgabe = "Hallo " + firstName + "!";
//     return ausgabe;
// } 

// 4. Funktions-Call aus Funktionen
// function test(firstName) //Parameter 
// {
//     // ... macht irgendwas
//     let ausgabe = grussformel() + firstName + "!";
//     return ausgabe;
// } 
// function grussformel() {
//     return "Hola, "
//     // return "Hello, "
// }
// console.log/(test("Anna"));