
couleur = {
  1: "lightblue",
  2: "yellow",
  3: "purple",
  4: "orange",
  5: "pink",
  6: "red",
  7: "green",
};


document.addEventListener("keydown", function (event) {
  if (event.code == "ArrowRight" && !app.model.fini && app.model.boolDescente) {
    app.bindGetDroite();
    //app.verifierLigneEntiere();

  } else if (event.code == "ArrowLeft" && !app.model.fini && app.model.boolDescente) {
    app.bindGetGauche();
   // app.verifierLigneEntiere();

  } else if (event.code == "ArrowDown" && !app.model.fini && app.model.boolDescente) {
    app.bindGetDescendre();
   // app.verifierLigneEntiere();

  } else if (event.code == "Space" && !app.model.fini && app.model.boolDescente) {
    app.bindGetDescendreRapidement();
  }else if (event.code == "ArrowUp" && !app.model.fini && app.model.boolDescente) {
    app.bindGetRotation();
   // app.verifierLigneEntiere();
  }

});


  document.getElementById("boutonBot").addEventListener("click",function(event) {
  if(document.getElementById("boutonBot").innerHTML == "Lancer Bot"){
    document.getElementById("boutonBot").onclick = function() {app.bindGetAfficherGrille()};
    document.getElementById("boutonBot").innerHTML = "Arrêter Bot";
    if(app!==undefined){
      clearInterval(app.interval);
    }
  }else{

    document.getElementById("boutonBot").onclick = function() {bot()};
    document.getElementById("boutonBot").innerHTML = "Lancer Bot";
    if(appBot!==undefined && appBot.interval!==undefined){
      clearInterval(appBot.interval);
    }
  }
});