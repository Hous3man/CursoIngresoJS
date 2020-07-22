/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// Declarar una variable
	var vNombre;

	// Asignar prompt a vNombre
	vNombre = prompt("Nombre","Ingrese un nombre");

 	// Mostrar alerta en pantalla
	alert("Tu nombre es "+vNombre);
}

