//const largeur = 25;
var tps = 1000
var interval=0;
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
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var context2 = canvas.getContext("2d");
var contextGrille = canvas.getContext("2d");

function creerGrille() {
  contextGrille = canvas.getContext("2d");

  contextGrille.strokeStyle = "White";
  contextGrille.fillStyle = 'white';
  contextGrille.font = "40px serif";
  contextGrille.fillText("Tetris", 25, 40);
  contextGrille.strokeStyle = "green";
  contextGrille.lineWidth = 5;
  contextGrille.strokeRect(100, 50, largeur * 10, largeur * 25);
  contextGrille.strokeRect(400, 50, largeur * 4, largeur * 2);
  contextGrille.font = "20px serif";
  contextGrille.fillText("SCORE", 400, 200);
  contextGrille.fillText("Active IA", 400, 300);
  
  contextGrille.beginPath();
  contextGrille.strokeStyle = "black";
  contextGrille.lineWidth = 1;
  for (let i = 0; i < 475; i += 20) {
    contextGrille.moveTo(100, 70 + i);
    contextGrille.lineTo(300, 70 + i);
    contextGrille.stroke();
  }
  for (let j = 0; j < 180; j += 20) {
    contextGrille.moveTo(120 + j, 50);
    contextGrille.lineTo(120 + j, 550);
    contextGrille.stroke();
  }

}


function afficherGrille() {
//  if(!app.timing){
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas = document.getElementById("mycanvas");
    context = canvas.getContext("2d");
  
    creerGrille()
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 10; j++) {
        if (app.grille.matrice[i][j] > 0) {
          context.strokeStyle = couleur[app.grille.matrice[i][j]];
          context.strokeRect(
            100+largeur * j+2 ,
            50+largeur * i +2,
            largeur - 4,
            largeur - 4
          );
        }
      }
  //  }
  }
 
}

document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowRight" && app.fini==false) {
    app.droite();
  } else if (event.code == "ArrowLeft" && app.fini==false) {
    app.gauche();
  } else if (event.code == "ArrowDown" && app.fini==false) {
    app.descendre();
  } else if (event.code == "Space" &&  app.fini==false) {
    app.descendreRapidement();
  }
  app.verifierLigneEntiere();
});

function supprimerLignes(tabLignes){
  context.clearRect(0, 0, canvas.width, canvas.height);
//  canvas = document.getElementById("mycanvas");
  //context = canvas.getContext("2d");
  creerGrille()
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if(tabLignes.includes(i)){
        context2.fillRect(
          100+largeur * j + 2,
          50+largeur * i + 2,
          largeur - 4,
          largeur - 4
        );
      }
      else if (app.grille.matrice[i][j] > 0) {
        context.strokeStyle = couleur[app.grille.matrice[i][j]];
        context.strokeRect(
          100+largeur * j + 2,
          50+largeur * i + 2,
          largeur - 4,
          largeur - 4
        );
      }
    }
  }
}

  function score(){

  }

  //faire descendre les cases toutes les tps
  function lancement(){
     interval = setInterval(function(){
        app.descendre()
      },tps); 
    }
     
  function arret(){
    clearInterval(arret)
  }

