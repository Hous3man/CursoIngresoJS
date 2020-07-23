function mostrar()
{
	// Declarar variable
	let vEdad;

	// Tomar la edad del campo "Ingrese su edad"
	vEdad=parseInt(document.getElementById("txtIdEdad").value);

	// Declarar si es adolescente y mostrar si es adolescente
	if(vEdad>=13 && vEdad<=17)
	{
		alert("Usted es adolescente");
	}
	
}//FIN DE LA FUNCIÓN