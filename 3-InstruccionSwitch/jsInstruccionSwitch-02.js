function mostrar()
{
	// Declarar variables
	let vMes;

	// Tomar mes del selector
	vMes=document.getElementById("txtIdMes").value;

	// Armar variantes
	switch(vMes)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
		case "Marzo":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
	}

}//FIN DE LA FUNCIÓN
//tomo el mes
//var mesDelAño =txtIdMes.value;
//alert(mesDelAño);