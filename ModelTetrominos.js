class ModelTetrominos {
  static tetrominos = {
    0: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    1: [
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
    ],
    2: [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    3: [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    4: [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
    ],
    5: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0],
    ],
    6: [
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  };

  constructor() {
    this.coordonnes = [0, 4];
    this.value = Math.floor(Math.random() * 7);

    this.matrice = ModelTetrominos.tetrominos[this.value];
    console.log(this.matrice);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.matrice[i][j] = this.matrice[i][j] * this.value;
      }
    }
    this.getNewMatrice();
  }

  rotation() {
    let invers = [[], [], [], []];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        invers[i][j] = mat[3 - j][i];
      }
    }
    this.matrice = invers;
  }

  get() {
    return this.matrice;
  }

  creationMatrice(nbLigneVide, nbColonneVide) {
    let valLigne = 0;
    let valColonne = 0;
    let tailleColonneVide = 0;
    let tailleLigneVide = 0;
    for (let c = 0; c < 4; c++) {
      if (nbLigneVide[c] != 10) tailleLigneVide++;
      if (nbColonneVide[c] != 10) tailleColonneVide++;
    }
    this.nbColonne = 4 - tailleColonneVide;
    this.nbLigne = 4 - tailleLigneVide;
    this.matricePetite = new Array(this.nbLigne);
    for (let a = 0; a < this.nbLigne; a++) {
      this.matricePetite[a] = new Array(this.nbColonne);
    }
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (!nbLigneVide.includes(i) && !nbColonneVide.includes(j)) {
          this.matricePetite[valLigne][valColonne] = this.matrice[i][j];
          if (valColonne + 1 > this.nbColonne - 1) {
            valColonne = 0;
            valLigne++;
          } else {
            valColonne++;
          }
        }
      }
    }
  }

  getNewMatrice() {
    let nbLigneVide = [10, 10, 10, 10];
    let nbColonneVide = [10, 10, 10, 10];
    let valColonneVide = 0;
    let valLigneVide = 0;
    let ligneVide = 0;
    let colonneVide = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.matrice[i][j] == 0) {
          ligneVide++;
        }
      }
      if (ligneVide == 4) {
        nbLigneVide[valLigneVide] = i;
        valLigneVide++;
      }
      ligneVide = 0;
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.matrice[j][i] == 0) {
          colonneVide++;
        }
      }
      if (colonneVide == 4) {
        nbColonneVide[valColonneVide] = i;
        valColonneVide++;
      }
      colonneVide = 0;
    }

    let mat = this.creationMatrice(nbLigneVide, nbColonneVide);
  }
}
