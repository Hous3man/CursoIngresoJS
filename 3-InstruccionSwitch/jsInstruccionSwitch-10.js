function mostrar()
{
	// Declarar e inicializar variables con campos delectores
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	// Calcular condiciones
	if(estacionIngresada == "Invierno")
	{
		switch(destinoIngresado)
		{
			case "Bariloche":
			alert("Se viaja");
			break;
			default:
			alert("No se viaja");
			break;
		}
	}
	else if(estacionIngresada == "Verano")
	{
		switch (destinoIngresado)
		{
			case "Mar del plata":
			case "Cataratas":
			alert("Se viaja");
			break;
			default:
			alert("No se viaja");
			break;
		}
	}
	else if(estacionIngresada == "Primavera")
	{
		switch (destinoIngresado)
		{
		case "Bariloche":
		alert("No se viaja");;
		break;
		default:
		alert("Se viaja");
		break;
		}
	}
	else
	{
		alert("Se viaja");
	}
	// Mostrar precio de acuerdo a lugar y fecha

}//FIN DE LA FUNCIÓN