/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
		// Declarar e inicializar variables
		let acumulador=0;
		let num;
		let respuesta="si";

		do 
		{
			num=parseInt(prompt("Ingrese un número : "));
			acumulador=acumulador+num;
			respuesta=prompt("Desea ingresas otro número? si/no ");
		
		} while (respuesta=="si");

		document.getElementById("txtIdMaximo").value=acumulador;
		document.getElementById("txtIdMinimmo").value=acumulador/contador;
		
}//FIN DE LA FUNCIÓN
/*// declarar variables
var banderaDelPrimero;
var numeroIngresado;
var numeroMaximo;
var numeroMinimo;
var respuesta;
//iniciar variables
banderaDelPrimero="es el primero";
respuesta='si';
while(respuesta=="si")
{
	
	respuesta=prompt("desea continuar?");
}
txtIdMaximo.value=numeroMaximo;
txtIdMinimmo.value=numeroMinimo;*/