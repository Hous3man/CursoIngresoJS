function mostrar() {
	let vTipo;
	let vPrecio = 0;
	let vCant = 0;
	let vMarca;
	let vFabricante;
	let acumAlcohol;
	let acumBarbijo;
	let acumJabon;
	let contAlcohol;
	let contBarbijo;
	let contJabon;
	let vMayorCant = 0;
	let vPromedioCant = 0;
	let vMarca;
	let vFabricante;
	let vMenorPrecioAlc = 0;
	let vMayorTipo;
	let vFabrMenPrecAlcohol;
	let cantAlcohol = 0;
	let flag=0

	for (i = 1; i <= 5; i++) {
		do {
			vTipo = prompt("Ingrese el tipo de producto: ");

		} while (vTipo != "Barbijo" && vTipo != "Jabón" && vTipo !== "Alcohol");

		do {
			vPrecio = parseInt(prompt("Ingrese el precio del producto: "));

		} while (vPrecio < 100 || vPrecio > 300);

		do {
			vCant = parseInt(prompt("Ingrese la cantidad de productos: "));
		} while (vCant <= 0 || vCant > 1000);

		vMarca = prompt("Ingrese la marca: ");
		vFabricante = prompt("Ingrese el fabricante: ");
	}
	switch (vTipo) {
		case "Alcohol":
			acumAlcohol= acumAlcohol + vCant;
			contAlcohol++;
			if(flag==0 && vPrecio>vMenorPrecioAlc)
			{
				vMenorPrecioAlc=vPrecio;
				contAlcohol=vCant;
				vFabrMenPrecAlcohol=vFabricante;
				flag=1;			
			}
			break;
		case "Barbijo":
			acumBarbijo= acumBarbijo + vCant;
			contBarbijo++;
		case "Jabón":
			acumJabon= acumJabon + vCant;
			contJabon++;
		
	}
}
/*	if(vPrecio<vMenorPrecio && vTipo=="Alcohol")
	{
		vMenorPrecio=vPrecio;
		cantAlcohol++;
		vFabrMenPrecAlcohol=vFabricante
		alert(cantAlcohol +" "+ vFabrMenPrecAlcohol + " " + vPrecio );
	}
	if(vCant>vMayorCant)
	{
		vMayorCant=vCant;
		vPromedioCant=vMayorCant/vCant;
		alert(vPromedioCant);
	}
	if(vTipo=="Jabón")
	{
		alert(vCant);
	}
	*/