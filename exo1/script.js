
let min, max, nbten, targetNumber;
let nbrest;

function startGame(difficulty) {
  switch (difficulty) {
    case "facile":
      min = 1;
      max = 10;
      nbten = 5;
      break;
    case "intermediaire":
      min = 1;
      max = 50;
      nbten = 7;
      break;
    case "difficile":
      min = 1;
      max = 100;
      nbten = 10;
      break;
  }

  targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  nbrest = nbten;
  document.getElementById("attempts").innerText = `Tentatives restantes : ${nbrest}`;
  document.getElementById("message").innerText = "";
}

function checkGuess() {
  let userGuess = parseInt(document.getElementById("guess").value);

  if ( isNaN(userGuess) || userGuess < min || userGuess > max) {
    document.getElementById("message").innerText =`Entrez un nombre entre ${ min } et ${max} !`;
    return;
  }

  nbrest--;

  if (userGuess == targetNumber) {
    alert(`vous avez gagné! Le nombre était ${targetNumber}!`);
    restartGame();
  } else if (userGuess < targetNumber) {
    document.getElementById("message").innerText = "inferieur !";
  } else {
    document.getElementById("message").innerText = "superieur !";
  }

  document.getElementById("attempts").innerText = `Tentatives restantes : ${nbrest}`;

  if (nbrest == 0) {
    alert( `vous avez  Perdu ! Le nombre était ${targetNumber}.`);
    restartGame();
  }
}

function restartGame(){
  document.getElementById("guess").value="";
  document.getElementById("message").innerText="";
  choose();
}
function choose(){
  let level=prompt("choisir le niveau de difficulté: 1.Facile (1-10, 5 tentatives), 2.Intermédiaire (1-50, 7 tentatives), 3.Difficile (1-100, 10 tentatives)");
  switch (level) {
    case "1":
      startGame("facile");
      current = "facile";
      break;
    case "2":
      startGame("intermediaire");
      current = "intermediaire";
      break;
    case "3":
      startGame("difficile");
      current = "difficile";
      break;
    default:
      alert("Choix invalide, veuillez essayer à nouveau.");
      choose();
  }
}
choose();

document.getElementById("submitGuess").addEventListener("click", function() {
  checkGuess();
});
document.getElementById("restart").addEventListener("click", function() {
  choose();
});


