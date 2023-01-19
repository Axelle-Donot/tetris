const appBot = new Controller(new Model(), new View());

const taillePop = 1;
var population = Array();

for (let i = 0; i < taillePop; i++) {
  population.push((appBot.model.grille = new ModelGrille()));
}

const score = (grille) => {
  var minligne = 0;
  var maxligne = 0;
  var nombreligne = 0;
  var nombretroue = 0;

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if (grille[i][j] !== 0) {
        maxligne = i;
        i = 25;
        j = 10;
      }
    }
  }

  nombreligne = appBot.model.grille.verifLigne();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 25; j++) {
      if (grille[j][i] !== 0) {
        if (j < minligne) {
          minligne = j;
        }
      }
    }
  }

  for (let i = 24; i <= 0; i++) {
    for (let j = 0; j < 10; j++) {
      if (grille[i][j] === 0 && grille[i + 1][j] === 1) {
        nombretroue += 1;
      }
    }
  }

  return nombreligne + nombretroue + maxligne + (maxligne - minligne);
};

for (let i = 0; i < taillePop; i++) {
  tetrominos = new ModelTetrominos();

  // création matrice score
  var scores = new Array(4);
  for (var j = 0; j < 4; j++) {
    scores[j] = new Array(10);
  }

  for (let k = 0; k < 4; k++) {
    for (let l = 0; l < scores[k].length; l++) {
      tetrominos.coordonnes = [0, l];
      population[i].ajouterTetrominos(tetrominos);

      population[i].descendreRapidement(tetrominos);

      scores[k][l] = score(population[i].matrice);
      console.log(scores[k][l]);

      population[i].supprimerTetrominos(tetrominos);

      tetrominos.coordonnes = [0, 0];
    }
    population[i].rotation(tetrominos);
  }

  var bestScore = scores[0][0];
  var ligne = 0;
  var colone = 0;

  console.log(scores);

  for (let m = 0; m < 4; m++) {
    for (let n = 0; n < scores[m].length; n++) {
      console.log(scores[m][n], m, n);
      if (scores[m][n] < bestScore) {
        bestScore = scores[m][n];
        ligne = m;
        colone = n;
      }
    }
  }

  console.log(bestScore);
  console.log(ligne, colone);

  //ajouter piece au bonne endroit
}

console.log({ pop: population });
