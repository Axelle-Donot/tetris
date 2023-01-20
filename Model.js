class Model{
    constructor(){
      this.boolDescente=true
      this.tps=1800
    }

     bindDisplayLancement (callback) {
        // Définition d'une nouvelle propriété pouvant être utilisée à partir d'une instance de Model.
        this.DisplayLancement = callback; // On veut pouvoir actualiser la View (depuis le Controller) quand nous récupérons les données.
      }
      
    bindDisplaySupprimerLigne (callback) {
        // Définition d'une nouvelle propriété pouvant être utilisée à partir d'une instance de Model.
        this.DisplaySupprimerLigne = callback; // On veut pouvoir actualiser la View (depuis le Controller) quand nous récupérons les données.
     }
     bindDisplayAfficherGrille (callback) {
        // Définition d'une nouvelle propriété pouvant être utilisée à partir d'une instance de Model.
        this.DisplayAfficherGrille = callback; // On veut pouvoir actualiser la View (depuis le Controller) quand nous récupérons les données.
     }

     bindDisplayDescendreTetrominos (callback) {
        // Définition d'une nouvelle propriété pouvant être utilisée à partir d'une instance de Model.
        this.DisplayDescendreTetrominos = callback; // On veut pouvoir actualiser la View (depuis le Controller) quand nous récupérons les données.
     }
     bindDisplayArret(callback) {
        // Définition d'une nouvelle propriété pouvant être utilisée à partir d'une instance de Model.
        this.DisplayArret = callback; // On veut pouvoir actualiser la View (depuis le Controller) quand nous récupérons les données.
     }

     getDescendre(){
        if(!this.fini){
            if(!this.grille.verifTetrominos(this.tetrominos)){
              this.grille.descendre(this.tetrominos);
              this.verifierLigneEntiere()
            }else{
              this.verifierLigneEntiere()
            }
            this.DisplayAfficherGrille(this.grille.matrice);
            this.verifierFinGrille()
            this.verifierLigneEntiere();

          }
     }

     getDroite(){
        if(!this.fini){
            if(!this.grille.verifTetrominos(this.tetrominos)){
            this.grille.deplacerDroite(this.tetrominos);
            }else{
              this.verifierLigneEntiere()
            }
            this.DisplayAfficherGrille(this.grille.matrice);
            this.verifierFinGrille()
            this.verifierLigneEntiere();
          }
     }

     getGauche(){
        if(!this.fini){
            if(!this.grille.verifTetrominos(this.tetrominos)){
              this.grille.deplacerGauche(this.tetrominos);
            }else{
              this.verifierLigneEntiere()
            }
            this.DisplayAfficherGrille(this.grille.matrice);
            this.verifierFinGrille()
            this.verifierLigneEntiere();
          }
     }

     getRotation(){
        this.grille.rotation(this.tetrominos)
        this.DisplayAfficherGrille(this.grille.matrice);
        this.verifierLigneEntiere();

    }
     
     getScore(view){
        if(this.grille.score>0){

          this.tps = (1 / (this.grille.score * 10)) * 1800000;
          this.DisplayLancement()
        }
        return this.grille.score;
     }

      getAfficherGrille () {
        this.timing=false;
        this.fini=false;
        this.grille = new ModelGrille();
        this.creationTetrominos();
        this.DisplayLancement(); 
        this.boolDescente=true;
      }

      getDescendreRapidement(){
        if(!this.fini){
            if(!this.grille.verifTetrominos(this.tetrominos) && this.boolDescente){
                this.boolDescente=false;
                let interval = setInterval(function(){
                  app.model.grille.descendre(app.model.tetrominos);
                  app.bindDisplayDescendreTetrominos(app.model.tetrominos,app.model.grille.matrice)
                  let val = app.model.grille.verifTetrominos(app.model.tetrominos)
                  if(val || app.model.tetrominos.coordonnes[0]+app.model.tetrominos.nbLigne-1 >= 24){
                    clearInterval(interval)
                    app.model.boolDescente=true
                    app.model.verifierLigneEntiere()
                    app.model.verifierFinGrille()
                  }
                },30)
            }else{
              this.verifierLigneEntiere()
              this.verifierFinGrille()
            }
          }
      }

      creationTetrominos(){
         if(!this.fini && !this.timing){
            this.tetrominos = new ModelTetrominos();
            this.grille.ajouterTetrominos(this.tetrominos);
            this.DisplayAfficherGrille(this.grille.matrice);
            this.verifierFinGrille()
        }
      }
        
      verifierLigneEntiere() {
        this.ligneASupp = this.grille.verifLigne();
        if (this.ligneASupp != false && this.grille.verifTetrominos(this.tetrominos)) {
            this.timing=true;
            
            this.DisplaySupprimerLigne(this.ligneASupp,this.grille.matrice)
            setTimeout(function() {
                app.model.timing=false;
                app.model.grille.suppLigne(app.model.ligneASupp);
                app.model.ligneASupp=false
            },10)
            this.creationTetrominos();
        }else if (this.grille.verifTetrominos(this.tetrominos)){
            this.creationTetrominos();
        }
    }

    verifierFinGrille(){
        if(this.grille.verifGrilleFini(this.tetrominos)){
          this.fini=true
          this.DisplayArret()
        }
      }



}
