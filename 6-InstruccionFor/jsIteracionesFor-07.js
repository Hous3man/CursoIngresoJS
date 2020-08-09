function mostrar()
{
	// Declarar variable para pedir un número por prompt
	let num;
	// Declarar e inicializar un contador (cuenta ingresos)
	let cont=0;
	// Pide un número por prompt y lo parsea
	num=parseInt(prompt("Ingrese un número: "));
	// Inicia iteración en 1, termina intereación cuando los números de la misma,
	// llegan a ser iguales al número ingresado. Con i++ va pidiendo números
	// seguidos al de inicio (1 en este caso).
	for(let i=1; i<=num; i++)
	{
		// Declara condición para que el resto de num dividido i (iteraciones), de cero;
		// lo que determina si son divisores
		if(num%i===0)
		{
			// Muestra si los números iterados son divisores
			alert("El número " +i+ " es divisor de "+num);
			// Suma al contador la cantidad de divisores según corresponda
			cont++;
		}
	}
	// Se muestran los divisores
	alert("Se encontraron " +cont+ " números divisores");

}//FIN DE LA FUNCIÓN