class View {
  constructor() {
    this.tps = 1500;
    this.interval=0;
    this.largeur=20
    this.canvas = document.getElementById("mycanvas");
    this.context = this.canvas.getContext("2d");
    this.context2 = this.canvas.getContext("2d");
    this.contextGrille = this.canvas.getContext("2d");
    this.couleur = {
      1: "lightblue",
      2: "yellow",
      3: "purple",
      4: "orange",
      5: "pink",
      6: "red",
      7: "green",
    };
    this.initView();


  }

  initView(){
    this.creerGrille()
  }

creerGrille() {
  this.contextGrille = this.canvas.getContext("2d");

  this.contextGrille.strokeStyle = "White";
  this.contextGrille.fillStyle = 'white';
  this.contextGrille.font = "40px serif";
  this.contextGrille.fillText("Tetris", 25, 40);
  this.contextGrille.strokeStyle = "white";
  this.contextGrille.lineWidth = 5;
  this.contextGrille.strokeRect(100, 50, this.largeur * 10, this.largeur * 25);
  this.contextGrille.font = "20px serif";
  this.contextGrille.fillText("SCORE", 400, 200);
  this.contextGrille.fillText("Active IA", 400, 300);
  
  this.contextGrille.beginPath();
  this.contextGrille.strokeStyle = "grey";
  this.contextGrille.lineWidth = 0.1;
  for (let i = 0; i < 475; i += 20) {
    this.contextGrille.moveTo(103, 70 + i);
    this.contextGrille.lineTo(297, 70 + i);
    this.contextGrille.stroke();
  }
  for (let j = 0; j < 180; j += 20) {
    this.contextGrille.moveTo(120 + j, 53);
    this.contextGrille.lineTo(120 + j, 547);
    this.contextGrille.stroke();
  }
}


afficherGrille() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.creerGrille()
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 10; j++) {
        if (app.model.grille.matrice[i][j] > 0) {
          this.context.strokeStyle = this.couleur[app.model.grille.matrice[i][j]];
          this.context.lineWidth = 2;
          this.context.strokeRect(
            100+this.largeur * j+2 ,
            50+this.largeur * i +2,
            this.largeur - 4,
            this.largeur - 4
          );
        }
      }
  }
  this.score()
}


descenteTetrominos(tetrominos){
  let t = tetrominos
  let tabI = new Array (4);
  let tabJ = new Array (4);
  let cpt=0;
  for(let i=0;i<t.nbLigne;i++){
    for(let j=0;j<t.nbColonne;j++){
      if(t.matricePetite[i][j]>0){
        tabI[cpt]=i+t.coordonnes[0];
        tabJ[cpt]=j+t.coordonnes[1];
        cpt++;
      }
    }
  }
  cpt=0
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.context2.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.creerGrille()
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if(cpt<4 && tabI[cpt]==i && tabJ[cpt]==j){
        this.context2.fillStyle=this.couleur[app.model.grille.matrice[i][j]];
        this.context2.fillRect(
          100+this.largeur * j + 2,
          50+this.largeur * i + 2,
          this.largeur - 4,
          this.largeur - 4
        );
        cpt++
      }else if (app.model.grille.matrice[i][j] > 0) {
        this.context.strokeStyle = this.couleur[app.model.grille.matrice[i][j]];
        this.context.lineWidth = 2;
        this.context.strokeRect(
          100+this.largeur * j + 2,
          50+this.largeur * i + 2,
          this.largeur - 4,
          this.largeur - 4
        );
      }
    }
  }
  this.score()
}

supprimerLignes(tabLignes)
{
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.creerGrille()
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 10; j++) {
      if(tabLignes.includes(i)){
        this.context.fillRect(
          100+this.largeur * j + 2,
          50+this.largeur * i + 2,
          this.largeur - 4,
          this.largeur - 4
        );
      }else if (app.model.grille.matrice[i][j] > 0) {
        this.context.strokeStyle = this.couleur[app.model.grille.matrice[i][j]];
        this.context.lineWidth = 2;
        this.context.strokeRect(
          100+this.largeur * j + 2,
          50+this.largeur * i + 2,
          this.largeur - 4,
          this.largeur - 4
        );
      }
    }
  }
  this.score()
}

  score(){
    this.contextGrille.font = "20px serif";
    this.contextGrille.fillStyle = 'white';
    this.contextGrille.fillText(app.bindGetScore(), 400, 120)
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
      },this.tps); 
    }
     
  arret(){
    clearInterval(arret)
    var contextFin= this.canvas.getContext("2d");
    var contextText =this.canvas.getContext("2d");
    contextFin.fillStyle="grey"

    contextFin.fillRect(50, 150, this.largeur * 20, this.largeur * 10);
    contextText.fillStyle = 'Black';
    contextText.font = "20px serif";
    contextText.fillText("VOUS AVEZ PERDU", 150,250);
  }
}
