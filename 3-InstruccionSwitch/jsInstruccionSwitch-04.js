function mostrar()
{
	// Declarar variable
	let vMes;
	
	// Tomar valor del campo selector
	vMes=document.getElementById("txtIdMes").value;

	// Plantear casos y mostrar mensaje según corresponda
	switch(vMes)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días.");
			break;
		case "Febrero":
			alert("Este mes puede tener 28 o 29 días.");
			break;
		default:
			alert("Este mes tiene 31 días.");
			break;
	}
}//FIN DE LA FUNCIÓN
//tomo el mes
//var mesDelAño =txtIdMes.value;
//alert(mesDelAño);