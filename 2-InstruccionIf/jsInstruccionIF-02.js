function mostrar()
{
	// Declarar variable
	let vEdad;

	// Tomar la edad del campo "Ingrese su edad"
	vEdad=parseInt(document.getElementById("txtIdEdad").value);

	// Declarar condición y mostrar si es mayor de edad  
	if(vEdad>=18)
	{
		alert("Usted es mayor de edad");
	}

}//FIN DE LA FUNCIÓN