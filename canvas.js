const largeur = 25;
// changement de façon de faire
// lire chaque case et hop le rectangle est fait selon la couleur
couleur = {
  1: "lightblue",
  2: "yellow",
  3: "purple",
  4: "orange",
  5: "darkblue",
  6: "red",
  7: "green",
};

function afficherGrille() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if (app.grille.matrice[i][j] > 0) {
        context.strokeStyle = couleur[app.grille.matrice[i][j]];
        context.strokeRect(
          largeur * j + 4,
          largeur * i + 4,
          largeur - 5,
          largeur - 5
        );
      }
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowRight") {
    app.droite();
  } else if (event.code == "ArrowLeft") {
    app.gauche();
  } else if (event.code == "ArrowDown") {
    app.descendre();
  } else if (event.code == "Space") {
    app.descendreRapidement();
  }
  app.verifierTetrominos();
});

function supprimerLignes(tabLignes){
  console.log(tabLignes);
  for(let i = 0; i < tabLignes.length; i++){
    for(let j=0;j<10;j++){
      context.strokeStyle = "White"
      context.strokeRect( largeur*j+4,largeur*tabLignes[i]+4, largeur-5, largeur-5);
   //   context.strokeStyle = "Black"
    }
  }
}

  function score(){

  }

  //faire descendre les cases toutes les tps
  function lancement(){
    app.descendre()
    setTimeout(lancement(),tps); 
    }
     
    lancement();

