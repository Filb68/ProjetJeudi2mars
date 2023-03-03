
console.log("**********Parcourons le array :")
for(let index in weeksOfTHPArray) {
  console.log(index); // index va aller de 0 à 3
  console.log(weeksOfTHPArray[index]);
}

console.log ("Bienvenue dans la pyramide");
var height = prompt ('Combien d\'étages veux-tu?');

// Création d'un tableau de height valeurs

var tab = [];

for(let count = height; count >=1; count--){
	tab.push("   ");
}
let control= tab.length;
console.log ('la longueur du tableau  est' + " " + control );


//Remplissage et affichage de height tableaux de height valeurs

for(let count = height; count >=1; count--){
	tab.shift()// Suppression du premier élément.

    tab.push("*")// Ajout d'une entrée dans le dernier élément.
    
    console.log(tab);  

}




// 
// console.log (tab01[4]+ tab01[5]);








   
