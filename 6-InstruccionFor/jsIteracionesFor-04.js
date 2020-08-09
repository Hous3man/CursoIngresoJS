function mostrar()
{
	// Declarar inicialización de iteración (i) en el número que quiero empezar a repetir, en este caso 1.
	// Que termine cuando i llega a 5. Que vaya avanzado desde el 1 (i++).
	for(let i=1; i<5; i++)
	{
		// Que muestre el los números de la iteración.
		alert(i)
		// Que cuando llegue al 3, corte la iteración.
		if(i===3){
			break
		}
	}
}//FIN DE LA FUNCIÓN