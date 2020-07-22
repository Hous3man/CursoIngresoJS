/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    // Declarar variables
    let largo;
    let ancho;
    let resultado;

    // Tomar valores de los campos
    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    // Calcular alambre a comprar para 3 hilos
    resultado=largo*ancho*3;

    //Mostrar alambre a comprar
    alert("Comprar "+resultado+" metros de alambre.");
}
function Circulo () 
{
    // Declarar variables
    let radio;
    let resultado;

    // Tomar valor del campo radio
    radio=parseFloat(document.getElementById("txtIdRadio").value);

    // Calcular alambre a comprar para 3 hilos
    resultado=radio*2*Math.PI;

    // Mostrar alambre a comprar
    alert("Comprar "+resultado.toFixed(2)+" metros de alambre.");
}
function Materiales () 
{
	// Declarar variables
    let largo;
    let ancho;
    let cemento;
    let cal;

    // Tomar valores de los campos
    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    // Calcular Materiales
    cemento=largo*ancho*2;
    cal=largo*ancho*3;

    // Mostrar materiales a comprar
    alert("Comprar "+cemento+" bolsas de cemento y "+cal+ " bolsas de cal");
}