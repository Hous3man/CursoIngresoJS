function mostrar() {
	// Declarar variable
	let vHora;

	// Tomar valor del campo selector
	vHora = parseInt(document.getElementById("txtIdHora").value);

	// Calcular casos y mostrar mensaje
	if(vHora>=7 && vHora<=11)
	{
		alert("Es de mañana.");
	}
	else if(vHora>=12 && vHora<=19)
	{
		alert("Es de tarde.");
	}
	else if((vHora>=0 && vHora<=6) || (vHora>=20 && vHora<=24))
	{
		alert("Es de noche.");
	}
	else
	{
		alert("La hora no existe.")
	}
}
	/*
	// Plantear casos y mostrar mensaje según corresponda
	switch (vHora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde.");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			alert("Es de noche.");
		default:
			alert("La hora no existe.")
			break;
	}
	*/
//FIN DE LA FUNCIÓN
//tomo la hora
//var horaDelDia =txtIdHora.value;
//alert(horaDelDia);