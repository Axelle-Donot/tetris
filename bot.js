const appBot = new Controller(new Model(), new View());

const taillePop = 1;
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

  console.log({ pop: population[i] });

  for (let k = 0; k < scores.length; k++) {
    for (let l = 0; l < scores[k].length; l++) {
      console.log("----------------------------------------");
      tetrominos.coordonnes = [0, l];

      console.log(tetrominos.coordonnes);

      population[i].descendreRapidement(tetrominos);

      console.log(k, l);
      console.log(tetrominos.coordonnes);

      console.log("----------------------------------------");

      //calcule scors
      //suppr le tetrominos

      population[i].supprimerTetrominos(tetrominos);
      tetrominos.coordonnes = [0, 0];
    }
    population[i].rotation(tetrominos);
  }
}

const score = (grille, ligne) => {
  const minligne = 0;
  const maxligne = 0;

  //ligne la plus haut
  //nombre ligne complete
  //nombre de trous
  //Variation hauteur
};

console.log({ pop: population });
