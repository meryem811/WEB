
let policeselect= document.getElementById("police");
let  parag=document.getElementById("paragraphe");
let couleur=document.getElementById("couleur");
let taille=document.getElementById("nb");

let policelist = ["Arial", "Courier New", "Georgia", "Verdana", "Times New Roman",];
  
  function remplirlist() {
    policelist.forEach(police => {
      let option = document.createElement("option");
      option.value = police;
      option.textContent = police;
      policeselect.appendChild(option);
    });
  }
 
function modifcouleur(){
    parag.style.color=couleur.value;
}
function modiftaille(){
    parag.style.fontSize=taille.value+ "px";
}
function modifpolice(){
    parag.style.fontFamily=policeselect.value;
}
remplirlist();

couleur.addEventListener("input",modifcouleur);
taille.addEventListener("input",modiftaille);
policeselect.addEventListener("change",modifpolice);

modifcouleur();
modiftaille();
modifpolice();

