function mostrar()
{
	// Declarar e inicializar variable
	let vCiudad = document.getElementById("txtIdDestino").value;

	// Calcular casos y mostrar mensaje
	switch(vCiudad)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor.");
			break;
	}
	
}//FIN DE LA FUNCIÓN