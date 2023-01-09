class Controller {
  constructor(modelTetrominos, modelGrille, view) {
    this.modelTetrominos = modelTetrominos;
    this.modelGrille = modelGrille;
    this.view = view;
  }

  creationGrille() {
    this.grille = new ModelGrille();
    this.creationTetrominos();
  }
  creationTetrominos() {
    this.tetrominos = new ModelTetrominos();
    this.grille.ajouterTetrominos(this.tetrominos);
    afficherGrille();
  }

  descendreRapidement() {
    this.grille.descendreRapidement(this.tetrominos);
    afficherGrille();
  }

  descendre() {
    this.grille.descendre(this.tetrominos);
    afficherGrille();
  }

  droite() {
    this.grille.deplacerDroite(this.tetrominos);
    afficherGrille();
  }

  gauche() {
    this.grille.deplacerGauche(this.tetrominos);
    afficherGrille();
  }

  score() {
    this.grille.score();
  }

  verifierLigneEntiere() {
    let value = this.grille.verifLigne();
    if (value != false) {
      this.grille.suppLigne(value);
    }
  }

  verifierTetrominos() {
    console.log(this.grille.verifTetrominos(this.tetrominos));
    afficherGrille();
  }

  rotation() {}
}
