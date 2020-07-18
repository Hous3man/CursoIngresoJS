/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	// Declarar variables
	let Sueldo;
	let Aumento;

	// Convertir a Int los valores dados en el campo de texto "Ingrese sueldo"
	Sueldo=parseInt(document.getElementById("txtIdSueldo").value);

	// Calcular aumento del 10% del sueldo
	Aumento=Sueldo+Sueldo*0.10;
	
	// Cargar sueldo con aumento en cuadro de texto "Resultado"
	document.getElementById("txtIdResultado").value=Aumento;
}