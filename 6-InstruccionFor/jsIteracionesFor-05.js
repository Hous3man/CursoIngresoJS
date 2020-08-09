function mostrar()
{
	// Declarar variable
	let num;
	// Con ( , , ) se declara un bucle infinito
	for( ; ; )
	{
		// Pedir un número y parciarlo a entero 
		num=parseInt(prompt("Ingrese un número: "));
		// Si el número es igual a 9, que salgo del loop infinito con break
		if(num===9){
			break
		}
		//Mostrar que número ingresó
		alert("Usted ingresó: "+num);
		
	}
}//FIN DE LA FUNCIÓN