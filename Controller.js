class Controller {
  constructor(modelTetrominos, modelGrille, view) {
    this.modelTetrominos = modelTetrominos;
    this.modelGrille = modelGrille;
    this.view = view;
    this.timing=false;
  }

  creationGrille() {
    this.grille = new ModelGrille();
    this.creationTetrominos();
    lancement();
  }
  creationTetrominos() {
    if(!this.timing){
      this.tetrominos = new ModelTetrominos();
    this.grille.ajouterTetrominos(this.tetrominos);
    afficherGrille();
    }
    
  }

  descendreRapidement() {
   if(!this.grille.verifTetrominos(this.tetrominos)){
      this.grille.descendreRapidement(this.tetrominos);
   }
   this.verifierLigneEntiere()
  }

  descendre() {
    if(!this.grille.verifTetrominos(this.tetrominos)){
     this.grille.descendre(this.tetrominos);
     this.verifierLigneEntiere()

    }else{
      this.verifierLigneEntiere()
    }

    afficherGrille();
  }

  droite() {
    if(!this.grille.verifTetrominos(this.tetrominos)){
     this.grille.deplacerDroite(this.tetrominos);
    }else{
      this.verifierLigneEntiere()
    }
    afficherGrille();
  }

  gauche() {
    if(!this.grille.verifTetrominos(this.tetrominos)){
      this.grille.deplacerGauche(this.tetrominos);
    }else{
      this.verifierLigneEntiere()
    }
    afficherGrille();
  }

  score() {
    this.grille.score();
  }

  verifierLigneEntiere() {
    this.ligneASupp = this.grille.verifLigne();
    if (this.ligneASupp != false && this.grille.verifTetrominos(this.tetrominos)) {
      this.timing=true;
      supprimerLignes(this.ligneASupp)
      setTimeout(function() {
        app.timing=false;
        app.grille.suppLigne(app.ligneASupp);
    },300)
    this.creationTetrominos();

    }else if (this.grille.verifTetrominos(this.tetrominos)){
      this.creationTetrominos();
    }
  }

  rotation() {}
}
