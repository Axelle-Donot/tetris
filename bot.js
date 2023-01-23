const appBot = new Controller(new Model(), new View(),true);

const taillePop = 1;

var population = Array();
var scoresPop = new Array(taillePop);
var coefPop = new Array(taillePop);
for (var j = 0; j < taillePop; j++) {
  coefPop[j] = new Array(4);
}

for (var j = 0; j < taillePop; j++) {
  coefPop[j][0] = 3;
  coefPop[j][1] = 1;
  coefPop[j][2] = 0.5;
  coefPop[j][3] = 0.5;
}

/**
 * CoefPop : coefficiant de chaque individue
 * coefPop[individue][0] = coeficient du nombre de troue
 * coefPop[individue][1] = coeficient de la ligne max
 * coefPop[individue][2] = coeficient de la variation de hauteur
 * coefPop[individue][3] = coeficient du nombre de lignes
 */

for (let i = 0; i < taillePop; i++) {
  population.push((appBot.model.grille = new ModelGrille()));
}

const hauteur = (grille, c) => {
  let h = 24;
  for (let i = 0; i < 25; i++) {
    if (grille[i][c] !== 0 && i <= h) {
      h = i - 1;
    }
  }
  return h;
};

const score = (grille, indice) => {
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
    difference += Math.abs(hauteur(grille, i) - (hauteur(grille, i + 1) ));
  }

  for (let i = 0; i < 10; i++) {
    for (let j = hauteur(grille, i) + 1; j < 25; j++) {
      // console.log({ i: i, j: j });
      // console.log({ piece: grille[j][i] });
      if (grille[j][i] === 0) {
        nombretroue++;
      }
    }
  }

  // console.log({ nombreligne: nombreligne });
  // console.log({ nombretroue: nombretroue });
  // console.log({ maxligne: 24 - maxligne });
  // console.log({ difference: difference });

  // console.log(coefPop);

  return (
    nombretroue * coefPop[indice][0] +
    (24 - maxligne) * coefPop[indice][1] +
    difference * coefPop[indice][2] -
    nombreligne * coefPop[indice][3]
  );
};


const bot = () => {

const nbPiece = 10;
const generation = 1;



for (let c = 0; c < generation; c++) {
  for (let i = 0; i < taillePop; i++) {
    appBot.interval = setInterval(() => {
      // for (let h = 0; h < nbPiece; h++) {
        tetrominos = new ModelTetrominos();
          if ((appBot.model.grille.verifGrilleFini(tetrominos) === false)){
          // console.log(tetrominos.matrice);

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

              scores[k][l] = score(population[i].matrice, i);

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

          // console.log(scores);

          tetrominos.coordonnes = [0, colone];

          population[i].ajouterTetrominos(tetrominos);

          for (let o = 0; o < rotation; o++) {
            population[i].rotation(tetrominos);
          }

      
          appBot.bindDisplayAfficherGrille(population[i].matrice)
          
          population[i].descendreRapidement(tetrominos);

          population[i].suppLigne(population[i].verifLigne());

          // let vide = "";
          // for (let z = 0; z < 25; z++) {
          //   for (let j = 0; j < 10; j++) {
          //     vide += population[i].matrice[z][j] + " ";
          //   }
          //   vide += "\n";
          // }

          // console.log(vide);
        }
      // }
    },500)
  }

  console.log({ pop: population });

  // for (let i = 0; i < taillePop; i++) {
  //   scoresPop[i] = score(population[i].matrice, i);
  // }

  // let maxScore = 0;
  // let maxindice = 0;
  // for (let i = 0; i < taillePop; i++) {
  //   if (scoresPop[i] < maxScore) {
  //     maxScore = scoresPop[i];
  //     maxindice = i;
  //   }
  // }

  // let maxScore2 = 0;
  // let maxindice2 = 0;
  // for (let i = 0; i < taillePop; i++) {
  //   if (scoresPop[i] < maxScore && i !== maxindice) {
  //     maxScore2 = scoresPop[i];
  //     maxindice2 = i;
  //   }
  // }

  // faire la moyenne des deux meilleurs
}

}

