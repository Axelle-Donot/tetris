const appBot = new Controller(new Model(), new View());

const taillePop = 10;
var population = Array();

for (let i = 0; i < taillePop; i++) {
  population.push((appBot.model.grille = new ModelGrille()));
}

for (let i = 0; i < taillePop; i++) {
  tetrominos = new ModelTetrominos();

  // création matrice score
  var scores = new Array(4);
  for (var j = 0; j < 4; j++) {
    scores[j] = new Array(10);
  }

  // position des tetrominos
  population[i].ajouterTetrominos(tetrominos);

  console.log({ population });
  for (let k = 0; k < scores.length; k++) {
    for (let l = 0; l < scores[k].length; l++) {
      tetrominos.coordonnes = [0, l];

      console.log({ avantdescendre: population });
      population[i].descendreRapidement(tetrominos);

      //calcule scors
      //suppr le tetrominos

      population[i].supprimerTetrominos(tetrominos);
      tetrominos.coordonnes = [0, 0];

      console.log({ aprèsdescendre: population });
    }
    population[i].rotation(tetrominos);
  }
}

console.log({ population });
