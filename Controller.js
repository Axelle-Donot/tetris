class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

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
    this.view.lancement()
  }

  bindDisplaySupprimerLigne(tabLignes){
    this.view.supprimerLignes(tabLignes)
  }

  bindDisplayAfficherGrille(){
    this.view.afficherGrille();
  }

  bindDisplayDescendreTetrominos(tetrominos){
    this.view.descenteTetrominos(tetrominos);
  }

  bindDisplayArret(){
    this.view.arret()
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
    return this.model.getScore();
  }
  bindGetAfficherGrille () {
    this.model.getAfficherGrille();
  }
  
  bindGetDescendreRapidement () {
    this.model.getDescendreRapidement();
  }

}
