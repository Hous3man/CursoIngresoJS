function mostrar()
{
	// Declarar e inicializar variable
	let vCiudad = document.getElementById("txtIdDestino").value;

	// Calcular casos y mostrar mensaje
	switch(vCiudad)
	{
		case "Bariloche":
			alert("Usted se encuentra en el Oeste de la Argentina.");
			break;
		case "Cataratas":
			alert("Usted se encuentra en el Norte de la Argentina.");
			break;
		case "Mar del plata":
			alert("Usted se encuentra en el Este de la Argentina.");
			break;
		case "Ushuaia":
			alert("Usted se encuentra en el Sur de la Argentina.");
			break;
	}
	
}//FIN DE LA FUNCIÓN