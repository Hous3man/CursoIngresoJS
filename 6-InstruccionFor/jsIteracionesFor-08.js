function mostrar() {
	// Declarar variable para pedir número
	let num;
	// Declarar variable contador e inicializar
	let cont = 0;
	// Iniciar validación con do while
	do {
		// Pedir y número por prompt y parcearlo
		num = parseInt(prompt("Ingrese un número "));
	} while (num < 1 || isNaN(num));
	// Inciar iteración en 1 (i = 1); Establecer que termine cuando i sea igual o menor a ese número;
	// y decirle que cuente los número de la iteración desde uno con i++
	for (let i = 1; i <= num; i++) {
		// Establecer condición para que cuando el resto de el número pedido y los números de la iteración den cero;
		// sume dichos números al contador
		if (num % i == 0) {
			cont++;
		}
	}
	// Si los números del contador son 2, decir que son primos
	if (cont == 2)
		alert("El número " + num + " es primo");
	// Si no, decir que no son primos
	else {
		alert("El número " + num + " no es primo");
	}
}