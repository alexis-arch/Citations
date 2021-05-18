// let tabCitations =['La beauté esst dans les yeux de celui qui regarde.','Le souvenir, c\'est la présence invisible.','yo','salut' ];
// console.log(tabCitations);
// //Parcours le tableau aléatoirement et qui affiche des indice aléatoire
// function citationAleatoire(max){
//     return Math.floor(Math.random()*max);
// }

// let tabRandom = (citationAleatoire(tabCitations.length));
// console.log(tabRandom);
function test() {
const citation = ["lorem", "ipsum", "dolor", "blabla", "blablablabla"];
const randomCitation = citation[Math.floor(Math.random() * citation.length)];
// console.log(randomCitation);
// Ceci est un test
const div=document.createElement("div");
// div.innerHTML= '<h1>' + randomCitation+"</h1>";
div.innerHTML='<h1>'+randomCitation+'</h1>';
const emplacement = document.querySelector("#test");
emplacement.appendChild(div);
console.log(div);

// console.log(emplacement);
// randomCitation.appendChild(citation);
// var test= document.querySelector('#test').appendChild(citation);

}

//convertir chiffre aléatoire en indice de chaine de caractère

// function convertirRandom(){
//     return tabRandom.toString();
// }
// console.log (convertirRandom);