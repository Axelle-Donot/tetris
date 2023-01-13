const appBot = new Controller(
  new ModelTetrominos(),
  new ModelGrille(),
  new View()
);

const taillePop = 10;
var population = Array();

for (let i = 0; i < taillePop; i++) {
  population.push((appBot.grille = new ModelGrille()));
}

console.log({ population });
