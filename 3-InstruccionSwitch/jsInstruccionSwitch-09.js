function mostrar()
{
	// Declarar e inicializar variables con campos delectores
	let estacionIngresada = document.getElementById("txtIdEstacion").value;
	let destinoIngresado = document.getElementById("txtIdDestino").value;

	// Declarar constante de precio valor base
	const PRECIO = 15000;

	// Declarar variable para final
	let vPrecioFinal;

	// Calcular condiciones
	if(estacionIngresada == "Invierno")
	{
		switch(destinoIngresado)
		{
			case "Bariloche":
			vPrecioFinal = PRECIO*1.2;
			break;
			case "Cataratas":
			case "Cordoba":
			vPrecioFinal = PRECIO*0.9;
			break;
			case "Mar del plata":
			vPrecioFinal = PRECIO*0.8;
			break;
		}
	}
	else if(estacionIngresada == "Verano")
	{
		switch (destinoIngresado)
		{
			case "Bariloche":
			vPrecioFinal = PRECIO*0.8;
			break;
			case "Cataratas":
			case "Cordoba":
			vPrecioFinal = PRECIO*1.1;
			break;
			case "Mar del plata":
			vPrecioFinal = PRECIO*1.2;
			break;
		}
	}
	else
	{
		switch (destinoIngresado)
		{
		case "Bariloche":
		case "Cataratas":
		case "Mar del plata":
		vPrecioFinal = PRECIO*1.1;
		break;
		case "Cordoba":
		vPrecioFinal = PRECIO;
		break;
		}
	}

	// Mostrar precio de acuerdo a lugar y fecha
	alert("Usted abonaría $"+vPrecioFinal)

}//FIN DE LA FUNCIÓN