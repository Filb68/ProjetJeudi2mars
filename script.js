console.log("coucou depuis la console");
let tyVariable = 5;
console.log(tyVariable);
console.log("Ceci n'est pas un commentaire")

let data1 = "variable en let définie dans le bloc principal";

{ //début du sous-bloc

  data1 = "variable en let modifiée dans le sous-bloc";
  var data2 = "variable en var définie dans le sous-bloc";
  let data3 = "variable en let définie dans le sous-bloc et visible !!!";
  console.log(data3); // là, ça devrait être bon.
} //fin du sous-bloc

console.log(data1); // "variable let modifiée dans le sous-bloc"
console.log(data2); // "variable var définie dans le sous-bloc"
//console.log(data3); // On aura une erreur : data3 n'est pas visible dans le bloc principal

{
let a = 1;
let b = 1;
a++
console.log(a);
console.log(b += 2);
}
let a = 3;
console.log("Bonjour à tous les "+ a);
console.log(a + "3");

const contentOfTHP = "Git-Ruby-Rails-HTML-CSS-JS";
const lesson = contentOfTHP.split("-");
console.log(lesson[0]); // "Git"
console.log(lesson[5]); // "JS"

let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris", "Lyon", "Montpellier"],
    successRate: 0.80,
    sessionMoto: "keep pushing to the top"
    };

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'imprime tout l'objet pour voir

weekNum = 15; //teste avec plusieurs valeurs
switch (weekNum) {
case 1:
console.log("Semaine 1 - Introduction au Code");
break;
case 2:
console.log("Semaine 2 - Découverte de Ruby");
break;
case 3:
console.log("Semaine 3 - Programmation Orientée Objet");
break;
case 4:
console.log("Semaine 4 - Initiation à Rails");
break;
case 5:
console.log("Semaine 5 - Rails intermédiaire");
break;
case 6:
console.log("Semaine 6 - Rails avancé");
break;
case 7:
console.log("Semaine 7 - HTML / CSS et intro au JS");
break;
case 8:
console.log("Semaine 8 - JavaScript de front");
break;
default:
console.log("Cette entrée n'est pas reconnue");
break;
}


console.log("Exercice des valeurs nulles");

let number = 0; //fais aussi le test avec un chiffre non nul
if (number) {
  console.log("ce message ne s'affiche que si number est non nul ");
}

let string = ""; //fais aussi le test avec un mot non vide
if (string) {
  console.log("ce message ne s'affiche que si string est non vide");
}

let myVariable = 0 // ici, myVariable sera undefined. Fais aussi le test en lui donnant une valeur: number, string, array ou autre.
if (myVariable) {
  console.log("ce message ne s'affiche que si myVariable contient une valeur ");
}




console.log("Exercice du comptage");

for(let count = 0; count <=5; count++){
    console.log(`on va compter jusqu'à 5 : ${count}`);
  }
  

  console.log("Exercice des boucles");

 // console.log(count); // Va créer une erreur car count est en let et donc son scope est limité au bloc for.
  //passe count en var pour tester ce que ça donne

//   let answer = "";
//   while(answer !== "oui") {
//     console.log("alors ?")
//     answer = prompt("Tu kiffes THP ?");
//   } 
  
//   console.log("haaa, tu nous fais plaisir !") // Qui se lassera le premier entre toi et ton ordi ? :D


  let word = "";
  let letter;
  
  while (true) {
      letter = prompt('Tape UNE lettre stp :');
  
      if (letter) {
          word += letter; //on rajoute la lettre saisie à la suite du mot
          console.log(word);
      } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
          break; // On quitte la boucle
      }
  }
  console.log(`voilà ce que tu as tapé : ${word}`); 


  console.log(`exercice Log in`); 

 //On déclare d'abord un array
 let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

 //On déclare ensuite un objet
 let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};
 
 console.log("**********Parcourons le array :")
 for(let index in weeksOfTHPArray) {
   console.log(index); // index va aller de 0 à 3
   console.log(weeksOfTHPArray[index]);
 }
 
 console.log("**********Parcourons l'objet :")
 for(let weekAttribut in weeksOfTHPObject) {
   console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
   console.log(weeksOfTHPObject[weekAttribut]);
 } 