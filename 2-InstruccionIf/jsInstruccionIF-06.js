function mostrar()
{
	// Declarar variable
	let vEdad;

	// Tomar la edad del campo "Ingrese su edad"
	vEdad=parseInt(document.getElementById("txtIdEdad").value);

	// Declarar si es adolescente y mostrar si no es adolescente
	if(vEdad<13)
	{
		alert("Usted es un niño");
	}
	else if(vEdad<=18)
	{
		alert("Usted es un adolescente");
	}
	else
	{
		alert("Usted es un adulto")
	}

}//FIN DE LA FUNCIÓN