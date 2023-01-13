class Controller {
  constructor(modelTetrominos, modelGrille, view) {
    this.modelTetrominos = modelTetrominos;
    this.modelGrille = modelGrille;
    this.view = view;
  }

  creationGrille() {
    this.timing = false;
    tps = 1500;
    this.fini = false;
    this.grille = new ModelGrille();
    this.creationTetrominos();
    lancement();
    this.boolDescente = true;
  }
  creationTetrominos() {
    if (!this.fini && !this.timing) {
      this.tetrominos = new ModelTetrominos();
      this.grille.ajouterTetrominos(this.tetrominos);
      afficherGrille();
      this.verifierFinGrille();
    }
  }

  descendreRapidement() {
    if (!this.fini) {
      if (!this.grille.verifTetrominos(this.tetrominos) && this.boolDescente) {
        this.boolDescente = false;
        let interval = setInterval(function () {
          app.grille.descendre(app.tetrominos);
          descenteTetrominos(app.tetrominos);
          let val = app.grille.verifTetrominos(app.tetrominos);
          if (
            val ||
            app.tetrominos.coordonnes[0] + app.tetrominos.nbLigne - 1 >= 24
          ) {
            clearInterval(interval);
            app.boolDescente = true;
            app.verifierLigneEntiere();
            app.verifierFinGrille();
          }
        }, 40);
      } else {
        this.verifierLigneEntiere();
        this.verifierFinGrille();
      }
    }
  }

  descendre() {
    if (!this.fini) {
      if (!this.grille.verifTetrominos(this.tetrominos)) {
        this.grille.descendre(this.tetrominos);
        this.verifierLigneEntiere();
      } else {
        this.verifierLigneEntiere();
      }

      afficherGrille();
      this.verifierFinGrille();
    }
  }

  droite() {
    if (!this.fini) {
      if (!this.grille.verifTetrominos(this.tetrominos)) {
        this.grille.deplacerDroite(this.tetrominos);
      } else {
        this.verifierLigneEntiere();
      }
      afficherGrille();
      this.verifierFinGrille();
    }
  }

  gauche() {
    if (!this.fini) {
      if (!this.grille.verifTetrominos(this.tetrominos)) {
        this.grille.deplacerGauche(this.tetrominos);
      } else {
        this.verifierLigneEntiere();
      }
      afficherGrille();
      this.verifierFinGrille();
    }
  }

  score() {
    if (this.grille.score > 0) {
      tps = (1 / (this.grille.score * 20)) * 1800000;
      lancement();
    }
    return this.grille.score;
  }

  verifierLigneEntiere() {
    this.ligneASupp = this.grille.verifLigne();
    if (
      this.ligneASupp != false &&
      this.grille.verifTetrominos(this.tetrominos)
    ) {
      this.timing = true;
      supprimerLignes(this.ligneASupp);
      setTimeout(function () {
        app.timing = false;
        app.grille.suppLigne(app.ligneASupp);
        app.ligneASupp = false;
      }, 200);
      this.creationTetrominos();
    } else if (this.grille.verifTetrominos(this.tetrominos)) {
      this.creationTetrominos();
    }
  }

  verifierFinGrille() {
    if (this.grille.verifGrilleFini(this.tetrominos)) {
      this.fini = true;
      arret();
    }
  }

  rotation() {
    this.grille.rotation(this.tetrominos);
    afficherGrille();
  }
}
