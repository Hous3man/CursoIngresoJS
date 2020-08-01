/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	// Declarar variable
	let clave;

	// Configurar iteración pedida con do while
	do
	{
		clave=prompt("Ingrese la clave.");
	}while(clave != "utn750");
/*
	// Declarar e inicializar variable de iteración
	let clave = prompt("ingrese el número clave.");

	// Configurar iteración pedida con while
	while(clave != "utn750")
	{
		clave = prompt("ingrese el número clave.");
	}
*/	
	alert("La clave es correcta");

}//FIN DE LA FUNCIÓN