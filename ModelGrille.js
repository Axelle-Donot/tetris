class ModelGrille {
  constructor() {
    this.tailleGrille = [10, 25];
    this.matrice = new Array(25);
    this.score = 0;

    for (let i = 0; i < 25; i++) {
      this.matrice[i] = new Array(10);
    }
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 10; j++) {
        this.matrice[i][j] = 0;
      }
    }
  }

  afficher() {
    let string = "";
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 10; j++) {
        string += this.matrice[i][j] + " ";
      }
      string += " \n";
    }
    return string;
  }

  supprimerTetrominos(tetrominos) {
    let coordT = tetrominos.coordonnes;
    for (let i = 0; i < tetrominos.nbLigne; i++) {
      for (let j = 0; j < tetrominos.nbColonne; j++) {
        if (
          tetrominos.matricePetite[i][j] > 0 &&
          this.matrice[coordT[0] + i][coordT[1] + j] > 0
        ) {
          this.matrice[coordT[0] + i][coordT[1] + j] = 0;
        }
      }
    }
  }

  ajouterTetrominos(tetrominos) {
    let coordT = tetrominos.coordonnes;
    let cpt = 0;
    let cptLigne = new Array(tetrominos.nbLigne);

    for (let i = 0; i < tetrominos.nbLigne; i++) {
      for (let j = 0; j < tetrominos.nbColonne; j++) {
        if (
          this.matrice[coordT[0] + i][coordT[1] + j] > 0 &&
          !cptLigne.includes(i)
        ) {
          cptLigne[cpt] = i;
          cpt++;
        }
      }
    }

    if (cpt == 0) {
      for (let i = 0; i < tetrominos.nbLigne; i++) {
        for (let j = 0; j < tetrominos.nbColonne; j++) {
          if (
            tetrominos.matricePetite[i][j] != 0 &&
            this.matrice[coordT[0] + i][coordT[1] + j] == 0
          ) {
            this.matrice[coordT[0] + i][coordT[1] + j] =
              tetrominos.matricePetite[i][j];
          }
        }
      }
    } else {
      for (let i = 0; i < tetrominos.nbLigne; i++) {
        for (let j = 0; j < tetrominos.nbColonne; j++) {
          if (
            coordT[0] + i - cptLigne[0] >= 0 &&
            tetrominos.matricePetite[i][j] != 0 &&
            this.matrice[coordT[0] + i - cptLigne[0]][coordT[1] + j] == 0
          ) {
            this.matrice[coordT[0] + i - cptLigne[0]][coordT[1] + j] =
              tetrominos.matricePetite[i][j];
          }
        }
      }
    }
  }
  //fonction decaller a droite
  deplacerDroite(tetrominos) {
    let coordT = tetrominos.coordonnes;
    let petiteT = tetrominos.matricePetite;
    let nbVoisin = 0;
    if (coordT[1] + tetrominos.nbColonne - 1 < 9) {
      for (let i = 0; i < tetrominos.nbLigne; i++) {
        for (let j = tetrominos.nbColonne - 1; j >= 0; j--) {
          if (
            petiteT[i][j] > 0 &&
            (j == tetrominos.nbColonne - 1 || petiteT[i][j + 1] == 0)
          ) {
            if (this.matrice[coordT[0] + i][coordT[1] + j + 1] > 0) {
              nbVoisin++;
            }
          }
        }
      }
      if (nbVoisin == 0) {
        for (let i = 0; i < tetrominos.nbLigne; i++) {
          for (let j = tetrominos.nbColonne - 1; j >= 0; j--) {
            if (tetrominos.matricePetite[i][j] != 0) {
              this.matrice[coordT[0] + i][coordT[1] + j + 1] =
                tetrominos.matricePetite[i][j];
              this.matrice[tetrominos.coordonnes[0] + i][
                tetrominos.coordonnes[1] + j
              ] = 0;
            }
          }
        }
        tetrominos.coordonnes[1] = tetrominos.coordonnes[1] + 1;
      }
    }
  }

  //fonction decaller a gauche
  deplacerGauche(tetrominos) {
    let coordT = tetrominos.coordonnes;
    let petiteT = tetrominos.matricePetite;
    let nbVoisin = 0;
    if (coordT[1] > 0) {
      for (let i = 0; i < tetrominos.nbLigne; i++) {
        for (let j = 0; j < tetrominos.nbColonne; j++) {
          if (petiteT[i][j] > 0 && (j == 0 || petiteT[i][j - 1] == 0)) {
            if (this.matrice[coordT[0] + i][coordT[1] + j - 1] > 0) {
              nbVoisin++;
            }
          }
        }
      }
      if (nbVoisin == 0) {
        for (let i = 0; i < tetrominos.nbLigne; i++) {
          for (let j = 0; j < tetrominos.nbColonne; j++) {
            if (tetrominos.matricePetite[i][j] != 0) {
              this.matrice[coordT[0] + i][coordT[1] + j - 1] =
                tetrominos.matricePetite[i][j];
              this.matrice[tetrominos.coordonnes[0] + i][
                tetrominos.coordonnes[1] + j
              ] = 0;
            }
          }
        }
        tetrominos.coordonnes[1] = tetrominos.coordonnes[1] - 1;
      }
    }
  }

  //fonction descendre d'une case
  descendre(tetrominos) {

    let petiteT = tetrominos.matricePetite;
    let nbVoisin = 0;
    if (tetrominos.coordonnes[0] + tetrominos.nbLigne - 1 < 24) {
      for (let i = 0; i < tetrominos.nbLigne; i++) {
        for (let j = 0; j < tetrominos.nbColonne; j++) {
          if (
            petiteT[i][j] > 0 &&
            (i == tetrominos.nbLigne - 1 || petiteT[i + 1][j] == 0)
          ) {
            if (this.matrice[tetrominos.coordonnes[0] + i + 1][tetrominos.coordonnes[1] + j] > 0) {
              nbVoisin++;
            }
          }
        }
      }
      if (nbVoisin == 0) {
        for (let i = tetrominos.nbLigne - 1; i >= 0; i--) {
          for (let j = 0; j < tetrominos.nbColonne; j++) {
            if (tetrominos.matricePetite[i][j] != 0) {
              this.matrice[tetrominos.coordonnes[0] + i + 1][tetrominos.coordonnes[1] + j] =
                tetrominos.matricePetite[i][j];
              this.matrice[tetrominos.coordonnes[0] + i][
                tetrominos.coordonnes[1] + j
              ] = 0;
            }
          }
        }
        tetrominos.coordonnes[0] = tetrominos.coordonnes[0] + 1;
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  descendreRapidement(tetrominos) {
    let bool = true;
    while (bool && tetrominos.coordonnes[0] + tetrominos.nbLigne - 1 < 24) {
      bool = this.descendre(tetrominos);
    }
  }

  //verifie si la grille est terminee ou non
  verifGrilleFini(tetrominos) {
    if (this.verifTetrominos(tetrominos) && tetrominos.coordonnes[0] == 0) {
      return true;
    }
    return false;
  }

  //verifier si le tetrominos a fini sa descente pour passer au suivant
  verifTetrominos(tetrominos) {
    let coordT = tetrominos.coordonnes;
    if (coordT[0] + tetrominos.nbLigne >= 25) {
      return true;
    } else {
      for (let i = 0; i < tetrominos.nbLigne; i++) {
        for (let j = 0; j < tetrominos.nbColonne; j++) {
          if (
            tetrominos.matricePetite[i][j] > 0 &&
            (i == tetrominos.nbLigne - 1 ||
              tetrominos.matricePetite[i + 1][j] == 0)
          ) {
            if (this.matrice[i + coordT[0] + 1][j + coordT[1]] > 0) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  //retourne le nombre de ligne complete dans un tableau
  verifLigne() {
    let nbParLigne;
    let valeurTab = 0;
    let tab = new Array(25);
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.matrice[i][j] > 0) {
          nbParLigne++;
        }
      }
      if (nbParLigne == 10) {
        tab[valeurTab] = i;
        valeurTab++;
      }
      nbParLigne = 0;
    }
    if (tab[0] !== undefined) {
      return tab;
    } else {
      return false;
    }
  }

  //supprimer les lignes
  suppLigne(tab) {
    let cpt = 0;
    for (let i = 0; i < 25; i++) {
      if (tab[i] !== undefined) {
        cpt++;
      }
    }
    if (cpt > 0) {
      this.calculScore(cpt);
    }

    for (let i = 0; i < tab.length; i++) {
      this.modifLigne(tab[i]);
    }
  }

  //modifier les lignes
  modifLigne(nb) {
    for (nb; nb >= 0; nb--) {
      for (let j = 0; j < 10; j++) {
        if (nb == 0) {
          this.matrice[nb][j] = 0;
        } else {
          this.matrice[nb][j] = this.matrice[nb - 1][j];
        }
      }
    }
  }

  calculScore(nb) {
    let diffScore = {
      1: 50,
      2: 100,
      3: 300,
      4: 500,
    };
    this.score = this.score + diffScore[nb];
  }

  rotation(tetrominos) {
    let coordT = tetrominos.coordonnes;
    for (let i = 0; i < tetrominos.nbLigne; i++) {
      for (let j = 0; j < tetrominos.nbColonne; j++) {
        if (
          tetrominos.matricePetite[i][j] > 0 &&
          this.matrice[coordT[0] + i][coordT[1] + j] > 0
        ) {
          this.matrice[coordT[0] + i][coordT[1] + j] = 0;
        }
      }
    }
    tetrominos.rotation();
    let val = 0;
    for (let j = tetrominos.nbColonne - 1; j >= 0; j--) {
      if (j + coordT[1] > 9) {
        val++;
      }
    }
    if (val > 0) {
      if ((tetrominos.nbLigne == 1 || tetrominos.nbLigne == 4) && val <= 2) {
        tetrominos.coordonnes[1] = tetrominos.coordonnes[1] - val;
      } else if (tetrominos.nbLigne == 1 || tetrominos.nbLigne == 4) {
        tetrominos.rotation();
      } else {
        tetrominos.rotation();
        tetrominos.rotation();
        tetrominos.rotation();
      }
    }
    this.ajouterTetrominos(tetrominos);
  }
}
