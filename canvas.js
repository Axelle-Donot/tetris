const largeur = 20;
var tps = 1500;
var interval = 0;
// changement de façon de faire
// lire chaque case et hop le rectangle est fait selon la couleur
couleur = {
  1: "lightblue",
  2: "yellow",
  3: "purple",
  4: "orange",
  5: "pink",
  6: "red",
  7: "green",
};
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var context2 = canvas.getContext("2d");
var contextGrille = canvas.getContext("2d");

creerGrille();

function creerGrille() {
  contextGrille = canvas.getContext("2d");

  contextGrille.strokeStyle = "White";
  contextGrille.fillStyle = "white";
  contextGrille.font = "40px serif";
  contextGrille.fillText("Tetris", 25, 40);
  contextGrille.strokeStyle = "white";
  contextGrille.lineWidth = 5;
  contextGrille.strokeRect(100, 50, largeur * 10, largeur * 25);
  contextGrille.font = "20px serif";
  contextGrille.fillText("SCORE", 400, 100);
  contextGrille.fillText("Active IA", 400, 200);

  contextGrille.beginPath();
  contextGrille.strokeStyle = "grey";
  contextGrille.lineWidth = 0.1;
  for (let i = 0; i < 475; i += 20) {
    contextGrille.moveTo(103, 70 + i);
    contextGrille.lineTo(297, 70 + i);
    contextGrille.stroke();
  }
  for (let j = 0; j < 180; j += 20) {
    contextGrille.moveTo(120 + j, 53);
    contextGrille.lineTo(120 + j, 547);
    contextGrille.stroke();
  }
}

function afficherGrille() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  creerGrille();
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if (app.grille.matrice[i][j] > 0) {
        context.strokeStyle = couleur[app.grille.matrice[i][j]];
        context.lineWidth = 2;
        context.strokeRect(
          100 + largeur * j + 2,
          50 + largeur * i + 2,
          largeur - 4,
          largeur - 4
        );
      }
    }
  }
  score();
}

document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowRight" && !app.fini && app.boolDescente) {
    app.droite();
    app.verifierLigneEntiere();
  } else if (event.code == "ArrowLeft" && !app.fini && app.boolDescente) {
    app.gauche();
    app.verifierLigneEntiere();
  } else if (event.code == "ArrowDown" && !app.fini && app.boolDescente) {
    app.descendre();
    app.verifierLigneEntiere();
  } else if (event.code == "Space" && !app.fini && app.boolDescente) {
    app.descendreRapidement();
  } else if (event.code == "ArrowUp" && !app.fini && app.boolDescente) {
    app.rotation();
    app.verifierLigneEntiere();
  }
});

function descenteTetrominos(tetrominos) {
  let t = tetrominos;
  let tabI = new Array(4);
  let tabJ = new Array(4);
  let cpt = 0;
  for (let i = 0; i < t.nbLigne; i++) {
    for (let j = 0; j < t.nbColonne; j++) {
      if (t.matricePetite[i][j] > 0) {
        tabI[cpt] = i + t.coordonnes[0];
        tabJ[cpt] = j + t.coordonnes[1];
        cpt++;
      }
    }
  }
  cpt = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context2.clearRect(0, 0, canvas.width, canvas.height);
  creerGrille();
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if (cpt < 4 && tabI[cpt] == i && tabJ[cpt] == j) {
        context2.fillStyle = couleur[app.grille.matrice[i][j]];
        context2.fillRect(
          100 + largeur * j + 2,
          50 + largeur * i + 2,
          largeur - 4,
          largeur - 4
        );
        cpt++;
      } else if (app.grille.matrice[i][j] > 0) {
        context.strokeStyle = couleur[app.grille.matrice[i][j]];
        context.lineWidth = 2;
        context.strokeRect(
          100 + largeur * j + 2,
          50 + largeur * i + 2,
          largeur - 4,
          largeur - 4
        );
      }
    }
  }
  score();
}

function supprimerLignes(tabLignes) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  creerGrille();
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if (tabLignes.includes(i)) {
        context.fillRect(
          100 + largeur * j + 2,
          50 + largeur * i + 2,
          largeur - 4,
          largeur - 4
        );
      } else if (app.grille.matrice[i][j] > 0) {
        context.strokeStyle = couleur[app.grille.matrice[i][j]];
        context.lineWidth = 2;
        context.strokeRect(
          100 + largeur * j + 2,
          50 + largeur * i + 2,
          largeur - 4,
          largeur - 4
        );
      }
    }
  }
  score();
}

function score() {
  contextGrille.font = "20px serif";
  contextGrille.fillStyle = "white";
  contextGrille.fillText(app.score(), 400, 120);
}

//faire descendre les cases toutes les tps
function lancement() {
  if (interval !== undefined) {
    clearInterval(interval);
  }
  interval = setInterval(function () {
    if (app.boolDescente) {
      app.descendre();
      app.verifierLigneEntiere();
    }
  }, tps);
}

function arret() {
  clearInterval(arret);
  var contextFin = canvas.getContext("2d");
  var contextText = canvas.getContext("2d");
  contextFin.fillStyle = "grey";

  contextFin.fillRect(50, 150, largeur * 20, largeur * 10);
  contextText.fillStyle = "Black";
  contextText.font = "20px serif";
  contextText.fillText("VOUS AVEZ PERDU", 150, 250);
}
