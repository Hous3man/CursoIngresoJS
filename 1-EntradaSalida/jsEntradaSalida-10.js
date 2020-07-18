/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// Declarar variables
	let Sueldo;
	let Descuento;

	// Convertir a Int los valores dados en el campo de texto "Ingrese importe"
	Sueldo=parseInt(document.getElementById("txtIdImporte").value);

	// Calcular aumento del 10% del sueldo
	Descuento=Sueldo-Sueldo*0.25;

	// Cargar sueldo con aumento en cuadro de texto "Resultado"
	document.getElementById("txtIdResultado").value=Descuento;
}
