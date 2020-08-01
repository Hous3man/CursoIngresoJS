function mostrar()
{
	// Declarar e inicializar variables
	let num;
	let i=0
	let acumulador=0;
	let promedio=0;

	// Calcular la iteración
	while(i<5)
		{
			num=parseInt(prompt("Ingrese un número "));
			acumulador = acumulador + num;
			i=i+1;
		}

	// Calcular promedio
	promedio=acumulador/i;

	// Asignar a los campos solicitados
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN
/*
var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
*/