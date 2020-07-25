function mostrar()
{
	// Declarar variable
	let vHora;

	// Tomar valor del campo selector
	vHora=parseInt(document.getElementById("txtIdHora").value);

	// Plantear casos y mostrar mensaje según corresponda
	switch(vHora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
	}
	
}//FIN DE LA FUNCIÓN
//tomo la hora
//var horaDelDia =txtIdHora.value;
//alert(horaDelDia);