const largeur = 20;

var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

context.strokeStyle = "White";
context.font = "40px serif";
context.fillText("Tetris", 25, 40);
context.strokeStyle = "green";
context.lineWidth = 5;
context.strokeRect(100, 50, largeur * 10, largeur * 25);
context.strokeRect(400, 50, largeur * 4, largeur * 2);
context.font = "20px serif";
context.fillText("SCORE", 400, 200);
context.fillText("Active IA", 400, 300);

context.beginPath();
context.strokeStyle = "grey";
context.lineWidth = 1;
for (let i = 0; i < 475; i += 20) {
  context.moveTo(100, 70 + i);
  context.lineTo(300, 70 + i);
  context.stroke();
}
for (let j = 0; j < 180; j += 20) {
  context.moveTo(120 + j, 50);
  context.lineTo(120 + j, 550);
  context.stroke();
}
