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
/*
var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")
context.strokeStyle = couleur[tetrominos.couleur]
var context1 = canvas.getContext("2d")
context1.strokeStyle =couleur[tetrominos.couleur]
var context2 = canvas.getContext("2d")
context2.strokeStyle = couleur[tetrominos.couleur]
var context3 = canvas.getContext("2d")
context3.strokeStyle = couleur[tetrominos.couleur]

  if(tetrominos.value==0){
    context.strokeRect(largeur,largeur,largeur,largeur)
    context1.strokeRect(largeur*2,largeur,largeur,largeur)
    context2.strokeRect(largeur*3,largeur,largeur,largeur)  
    context3.strokeRect(largeur*4,largeur,largeur,largeur)
  }else if(tetrominos.value==1){
    contextCube.strokeRect(largeur,largeur,largeur,largeur)
    contextCube1.strokeRect(largeur*2,largeur,largeur,largeur)
    contextCube2.strokeRect(largeur,largeur*2,largeur,largeur)
    contextCube3.strokeRect(largeur*2,largeur*2,largeur,largeur)

  }else if(tetrominos.value==2){
    context.strokeRect(largeur,largeur*2,largeur,largeur)
    context1.strokeRect(largeur*2,largeur*2,largeur,largeur)
    context2.strokeRect(largeur*3,largeur*2,largeur,largeur)
    context3.strokeRect(largeur*2,largeur,largeur,largeur)
  }else if(tetrominos.value==3){
    context.strokeRect(largeur,largeur,largeur,largeur)
    context1.strokeRect(largeur*2,largeur,largeur,largeur)
    context2.strokeRect(largeur*3,largeur,largeur,largeur)
    context3.strokeRect(largeur,largeur*2,largeur,largeur)
  }else if(tetrominos.value==4){
    context.strokeRect(largeur,largeur,largeur,largeur)
    context1.strokeRect(largeur*2,largeur,largeur,largeur)
    context2.strokeRect(largeur*3,largeur,largeur,largeur)
    context3.strokeRect(largeur*3,largeur*2,largeur,largeur) 
  }else if(tetrominos.value==5){
    context.strokeRect(largeur*2,largeur,largeur,largeur)
    context1.strokeRect(largeur*3,largeur,largeur,largeur)
    context2.strokeRect(largeur,largeur*2,largeur,largeur)
    context3.strokeRect(largeur*2,largeur*2,largeur,largeur)
  }else{
    context.strokeRect(largeur,largeur,largeur,largeur)
    context1.strokeRect(largeur*2,largeur,largeur,largeur)
    context2.strokeRect(largeur*2,largeur*2,largeur,largeur)
    context3.strokeRect(largeur*3,largeur*2,largeur,largeur)
  }
*/
