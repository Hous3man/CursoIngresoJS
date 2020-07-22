/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// Declarar variables
	let sueldo;
	let aumento;

	// Convertir a Int los valores dados en el campo de texto "Ingrese sueldo"
	sueldo=parseInt(document.getElementById("txtIdSueldo").value);

	// Calcular aumento del 10% del sueldo
	aumento=sueldo+sueldo*0.10;
	
	// Cargar sueldo con aumento en cuadro de texto "Resultado"
	document.getElementById("txtIdResultado").value=aumento;
}