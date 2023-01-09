class Controller {
  constructor(modelTetrominos, modelGrille, view) {
    this.modelTetrominos = modelTetrominos;
    this.modelGrille = modelGrille;
    this.view = view;
  }

  creationGrille() {
    this.grille = new ModelGrille();
    this.creationTetrominos();
   // lancement();
  }
  creationTetrominos() {
    this.tetrominos = new ModelTetrominos();
    this.grille.ajouterTetrominos(this.tetrominos);
    afficherGrille();
  }

  descendreRapidement() {
   if(!this.grille.verifTetrominos(this.tetrominos)){
      this.grille.descendreRapidement(this.tetrominos);
   }
    this.creationTetrominos();
  }

  descendre() {
    console.log(this.grille.verifTetrominos(this.tetrominos));

    if(!this.grille.verifTetrominos(this.tetrominos)){
     this.grille.descendre(this.tetrominos);
    }else{
      this.creationTetrominos();
    }
    console.log(this.grille.verifTetrominos(this.tetrominos));
    if(this.grille.verifTetrominos(this.tetrominos)){
      this.creationTetrominos();
    }
    afficherGrille();
  }

  droite() {
    if(!this.grille.verifTetrominos(this.tetrominos)){
     this.grille.deplacerDroite(this.tetrominos);
    }else{
      this.creationTetrominos();
    }
    afficherGrille();
  }

  gauche() {
    if(!this.grille.verifTetrominos(this.tetrominos)){
      this.grille.deplacerGauche(this.tetrominos);
    }else{
      this.creationTetrominos();
    }
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
    afficherGrille();
  }

  rotation() {}
}
