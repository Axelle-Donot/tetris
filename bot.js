const appBot = new Controller(new Model(), new View());

const taillePop = 1;
var population = Array();

for (let i = 0; i < taillePop; i++) {
  population.push((appBot.model.grille = new ModelGrille()));
}

const hauteur = (grille, c) => {
  let h = 24;
  for (let i = 0; i < 25; i++) {
    if (grille[i][c] !== 0 && i < h) {
      h = i - 1;
    }
  }
  return h;
};

const score = (grille) => {
  var difference = 0;
  var maxligne = 24;
  var nombreligne = 0;
  var nombretroue = 0;

  for (let i = 0; i < 10; i++) {
    if (hauteur(grille, i) < maxligne) {
      maxligne = hauteur(grille, i);
    }
  }

  nombreligne =
    appBot.model.grille.verifLigne() === false
      ? 0
      : appBot.model.grille.verifLigne().length;

  for (let i = 0; i < 9; i++) {
    difference += Math.abs(hauteur(grille, i) - hauteur(grille, i + 1));
  }

  for (let i = 0; i <= 23; i++) {
    for (let j = 0; j < 10; j++) {
      if (grille[i][j] !== 0 && grille[i + 1][j] === 0) {
        nombretroue++;
      }
    }
  }

  console.log({ nombreligne: nombreligne });
  console.log({ nombretroue: nombretroue });
  console.log({ maxligne: maxligne });
  console.log({ difference: difference });

  return nombretroue * 2 + (25 - maxligne) - nombreligne;
};

const generation = 100;

for (let h = 0; h < generation; h++) {
  for (let i = 0; i < taillePop; i++) {
    tetrominos = new ModelTetrominos();
    console.log(tetrominos.matrice);

    // création matrice score
    var scores = new Array(4);
    for (var j = 0; j < 4; j++) {
      scores[j] = new Array(
        j % 2 === 0
          ? 10 - tetrominos.matricePetite[0].length + 1
          : 10 - tetrominos.matricePetite.length + 1
      );
    }

    for (let k = 0; k < 4; k++) {
      for (let l = 0; l < scores[k].length; l++) {
        tetrominos.coordonnes = [0, l];
        population[i].ajouterTetrominos(tetrominos);

        population[i].descendreRapidement(tetrominos);

        scores[k][l] = score(population[i].matrice);

        population[i].supprimerTetrominos(tetrominos);
      }
      tetrominos.coordonnes = [0, 0];
      population[i].ajouterTetrominos(tetrominos);
      population[i].rotation(tetrominos);
      population[i].supprimerTetrominos(tetrominos);
    }

    var bestScore = scores[0][0];
    var rotation = 0;
    var colone = 0;

    for (let m = 0; m < 4; m++) {
      for (let n = 0; n < scores[m].length; n++) {
        if (scores[m][n] < bestScore) {
          bestScore = scores[m][n];
          rotation = m;
          colone = n;
        }
      }
    }

    console.log(scores);

    tetrominos.coordonnes = [0, colone];

    population[i].ajouterTetrominos(tetrominos);

    for (let o = 0; o < rotation; o++) {
      population[i].rotation(tetrominos);
    }

    population[i].descendreRapidement(tetrominos);

    population[i].suppLigne(population[i].verifLigne());

    let vide = "";
    for (let z = 0; z < 25; z++) {
      for (let j = 0; j < 10; j++) {
        vide += population[i].matrice[z][j] + " ";
      }
      vide += "\n";
    }

    console.log(vide);
  }
}

console.log({ pop: population });
