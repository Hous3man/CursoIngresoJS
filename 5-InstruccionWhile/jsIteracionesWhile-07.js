/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	// Declarar e inicializar variables
	let contador=0;
	let acumulador=0;
	let respuesta="si";
	let num;

	// Establecer condiciones
	do 
	{
		num=parseInt(prompt("Ingrese un número : "));
		acumulador=acumulador+num;
		contador=contador+1;
		respuesta=prompt("Desea ingresas otro número? si/no ");
		
	} while (respuesta=="si");

	// Poner valores en los campos de texto
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/*var contador;
var acumulador;
var respuesta;
contador=0;
acumulador=0;
respuesta='si';


txtIdSuma.value=acumulador;
txtIdPromedio.value=acumulador/contador(calcula promedio);*/