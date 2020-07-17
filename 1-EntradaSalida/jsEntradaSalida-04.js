/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Declarar variable
	var vNombre;

	// Asignando prompt a vNombre
	vNombre = prompt("Ingrese un nombre");

	// asignando ID a la variable
	document.getElementById("txtIdNombre").value = vNombre;
}

