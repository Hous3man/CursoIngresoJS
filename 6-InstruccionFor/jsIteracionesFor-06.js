function mostrar()
{
	// Declarar variable para pedir un número por prompt
	let num;
	// Declarar e inicializar un contador (cuenta ingresos)
	let cont=0;
	// Pide un número por prompt y lo parsea
	num=parseInt(prompt("Ingrese la cantidad de números: "));
	// Inicia iteración en 1, termina intereación con el número pedido. Con i++ va pidiendo números
	// seguidos al de inicio (1 en este caso).
	for(let i=1; i<=num; i++)
	{
		// Declara condición para que el resto de los números divido 2, de cero;
		// lo que determina que los mismos sean pares
		if(i%2===0)
		{
			// Muestra si los números iterados son pares
			alert("El número " +i+ " es par");
			// Cuenta que cantidad de números pares se ingresaron
			cont++;
		}
	}
	// Muestro la cantidad de números pares contados anteriormente
	alert("Se encontraron " +cont+ " números pares");
}//FIN DE LA FUNCIÓN