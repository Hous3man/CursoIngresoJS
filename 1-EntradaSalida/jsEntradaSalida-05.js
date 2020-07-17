/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// Declarar variables
	var vNombre;
	var vEdad;

	// Asignar variables a elementos por ID
	vNombre = document.getElementById("txtIdNombre").value;
	vEdad = document.getElementById("txtIdEdad").value;

	// Mostrar concatenado
	// alert("Usted se llama "+vNombre+" y tiene "+vEdad+" años");
	alert(`Usted se llama ${vNombre} y tiene ${vEdad} años`);
}