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
     
     getScore(controller){
    
        if(this.grille.score>0){

          this.tps = (1 / (this.grille.score * 10)) * 1800000;
          if(controller.IsBot == false){
            this.DisplayLancement()

          }
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
                  let modele = app.getModel()
                  modele.grille.descendre(modele.tetrominos);
                  app.bindDisplayDescendreTetrominos(modele.tetrominos,modele.grille.matrice)
                  let val = modele.grille.verifTetrominos(modele.tetrominos)
                  if(val || modele.tetrominos.coordonnes[0]+modele.tetrominos.nbLigne-1 >= 24){
                    clearInterval(interval)
                    modele.boolDescente=true
                    modele.verifierLigneEntiere()
                    modele.verifierFinGrille()
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
                let modele = app.getModel();
                modele.timing=false;
                modele.grille.suppLigne(app.model.ligneASupp);
                modele.ligneASupp=false
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
