/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	// Declarar variable
	let num;

	// Configurar iteración pedida con do while
	do
	{
		num = parseInt(prompt("ingrese un número entre 0 y 9."));
	}while(!(num>=0 && num<=10));

	// Agregarlo al campo
	document.getElementById("txtIdNumero").value=num;
	
}//FIN DE LA FUNCIÓN