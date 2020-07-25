function mostrar()
{
	// Declarar variable
	let vMes;

	// Tomar valor del campo selector
	vMes=document.getElementById("txtIdMes").value;

	// Plantear casos y mostrar mensaje según corresponda
	switch(vMes)
	{
		case "Febrero":
			alert("Este mes no tiene mas de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 días o más.");
			break;
	}
	


}//FIN DE LA FUNCIÓN
//tomo el mes
//var mesDelAño =txtIdMes.value;
//alert(mesDelAño);