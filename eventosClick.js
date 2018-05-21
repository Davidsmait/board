var boton = document.getElementById("entrada_boton");
var texto = document.getElementById("entrada_texto");

var cuadro = document.getElementById("area_de_dibujo");
var lienzo = cuadro.getContext("2d");

var x;
var y;
var estado = 0;
var color;

boton.addEventListener("click", cambiarColor);

document.addEventListener("mousedown", dibujarMouseDown);
document.addEventListener("mousemove", dibujarMouseMove);
document.addEventListener("mouseup", dibujarMouseUp);

function dibujarMouseDown(evento)
{
  if(estado ==0)
  {
  x = evento.layerX;
  y = evento.layerY;
  estado = 1;
  }
}

function dibujarMouseMove(evento)
{
  if (estado == 1)
  {
  dibujarLinea(color, x, y, evento.layerX,evento.layerY);
  x = evento.layerX;
  y = evento.layerY;

  }
}

function dibujarMouseUp()
{
  estado = 0;
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = "3";
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function cambiarColor()
{
  color = texto.value;
}
