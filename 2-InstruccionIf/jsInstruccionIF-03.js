function mostrar()
{
	// Declarar variable
	let vEdad;

	// Tomar la edad del campo "Ingrese su edad"
	vEdad=parseInt(document.getElementById("txtIdEdad").value);

	// Definir y mostrar si es mayor o menor de edad
	if(vEdad>=18)
	{
		alert("Usted es mayor de edad");
	}
	else
	{
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN