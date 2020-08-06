/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// Declarar e inicializar variables
	let sumaPos=0
	let productoNeg=1;
	let respuesta="si";
	let num;

	// Establecer condiciones
	do 
	{
		num=parseInt(prompt("Ingrese un número : "));
		if(num>=0)
		{
			sumaPos=sumaPos+num;
		}
		else
		{
			productoNeg=productoNeg*num;
		}
		respuesta=prompt("Desea ingresas otro número? si/no ");
	
	} while (respuesta=="si");

	// Poner valores en los campos de texto
	document.getElementById("txtIdSuma").value=sumaPos;
	document.getElementById("txtIdProducto").value=productoNeg;

}//FIN DE LA FUNCIÓN
/*var contador;
var respuesta;
var sumaPositivos;
var multiplicacionNegativos;
contador=0;
sumaPositivos=0;
multiplicacionNegativos=1;
respuesta='si';


txtIdSuma.value=sumaPositivos;
txtIdProducto.value=multiplicacionNegativos;*/