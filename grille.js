const largeur = 20;

var canvas = document.getElementById("mycanvas");
var contextGrille = canvas.getContext("2d");

contextGrille.strokeStyle = "White";
contextGrille.fillStyle = 'white';
contextGrille.font = "40px serif";
contextGrille.fillText("Tetris", 25, 40);
contextGrille.strokeStyle = "green";
contextGrille.lineWidth = 5;
contextGrille.strokeRect(100, 50, largeur * 10, largeur * 25);
contextGrille.strokeRect(400, 50, largeur * 4, largeur * 2);
contextGrille.font = "20px serif";
contextGrille.fillText("SCORE", 400, 200);
contextGrille.fillText("Active IA", 400, 300);

contextGrille.beginPath();
contextGrille.strokeStyle = "black";
contextGrille.lineWidth = 1;
for (let i = 0; i < 475; i += 20) {
  contextGrille.moveTo(100, 70 + i);
  contextGrille.lineTo(300, 70 + i);
  contextGrille.stroke();
}
for (let j = 0; j < 180; j += 20) {
  contextGrille.moveTo(120 + j, 50);
  contextGrille.lineTo(120 + j, 550);
  contextGrille.stroke();
}
