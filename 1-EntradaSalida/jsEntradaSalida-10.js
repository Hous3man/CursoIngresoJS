/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// Declarar variables
	let sueldo;
	let descuento;

	// Convertir a Int los valores dados en el campo de texto "Ingrese importe"
	sueldo=parseInt(document.getElementById("txtIdImporte").value);

	// Calcular descuento del 25% del sueldo
	descuento=sueldo-sueldo*0.25;

	// Cargar sueldo con descuento en cuadro de texto "Resultado"
	document.getElementById("txtIdResultado").value=descuento;
}
