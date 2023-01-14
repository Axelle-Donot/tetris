
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
