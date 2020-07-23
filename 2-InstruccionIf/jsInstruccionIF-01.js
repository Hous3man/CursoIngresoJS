function mostrar()
{
	// Declarar variable
	let vEdad;
	
	// Tomar la edad del campo "Ingrese su edad"
	vEdad=parseInt(document.getElementById("txtIdEdad").value);
	
	// Declarar condición y Mostrar mensaje if vEdad es exactamente igual a 15
	if(vEdad===15)
	{
		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN