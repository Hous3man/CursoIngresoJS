/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// Declarar una variable
	var vNombre;

	// Asignar variable al ElementByID
	vNombre = document.getElementById("txtIdNombre").value;

	// Mostrar alerta en pantalla
	alert("Tu nombre es "+vNombre);

	/* var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert("ok");
	*/
}