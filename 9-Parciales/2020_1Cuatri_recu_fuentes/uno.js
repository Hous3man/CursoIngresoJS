function mostrar()
{
	let vProd;
	let vTipo;
	let vPrecio;
	let vCant;
	let vMarca;
	let vFabricante;
	
	for(i=1;i<=5;i++)
	{
		do
		{
			vTipo=prompt("Ingrese el tipo de producto: ");

		}while(vTipo!=="Barbijo" && vCategoria!=="Jabón" && vCategoria!=="Alcohol");
		
		do
		{
			vPrecio=parseInt(prompt("Ingrese el precio del producto: "));

		}while(vPrecio<=100 || vPrecio>300);

		do
		{
			vCant=parseInt(prompt("Ingrese la cantidad de productos: "));
		}while(vCant<0 || vCant>=1000);

		vMarca=prompt("Ingrese la marca: ");
		vFabricante=prompt("Ingrese el fabricante: ");
}
}
