class Controller {
  constructor(model, view,isBot) {
    this.model = model;
    this.view = view;
    this.IsBot=isBot;
    this.bindDisplayLancement = this.bindDisplayLancement.bind(this)
    this.model.bindDisplayLancement(this.bindDisplayLancement);

    this.bindDisplaySupprimerLigne = this.bindDisplaySupprimerLigne.bind(this)
    this.model.bindDisplaySupprimerLigne(this.bindDisplaySupprimerLigne);

    this.bindDisplayAfficherGrille = this.bindDisplayAfficherGrille.bind(this)
    this.model.bindDisplayAfficherGrille(this.bindDisplayAfficherGrille);

    this.bindDisplayDescendreTetrominos = this.bindDisplayDescendreTetrominos.bind(this)
    this.model.bindDisplayDescendreTetrominos(this.bindDisplayDescendreTetrominos);

    this.bindDisplayArret = this.bindDisplayArret.bind(this)
    this.model.bindDisplayArret(this.bindDisplayArret);


  }
  
// View
  bindDisplayLancement(){
    this.lancement()
  }

  bindDisplaySupprimerLigne(tabLignes,matrice){
    this.view.supprimerLignes(tabLignes,matrice,this);
  }

  bindDisplayAfficherGrille(matrice){
    this.view.afficherGrille(matrice,this);
  }

  bindDisplayDescendreTetrominos(tetrominos,matrice){
    this.view.descenteTetrominos(tetrominos,matrice,this);
  }

  bindDisplayArret(){
    this.view.arret()
  }

   //faire descendre les cases toutes les tps
    lancement(){
      if(this.interval!==undefined){
       clearInterval(this.interval)
      }
      this.interval = setInterval(function(){
       if(app.model.boolDescente){
         app.bindGetDescendre()
         app.model.verifierLigneEntiere();
       }
       },this.model.tps); 
     }
      

// Model
  bindGetDescendre () {
    this.model.getDescendre();
  }

  bindGetDroite() {
    this.model.getDroite();
  }

  bindGetGauche () {
    this.model.getGauche();
  }

  bindGetRotation () {
    this.model.getRotation();
  }
  
  bindGetScore () {
    return this.model.getScore(this);
  }
  bindGetAfficherGrille () {
    this.model.getAfficherGrille();
  }
  
  bindGetDescendreRapidement () {
    this.model.getDescendreRapidement();
  }

  getModel(){
    return this.model;
  }
}
