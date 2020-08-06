/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
		// Declarar variables e Inicializar variables
		let num
		let max
		let min
		let resp="si";

		// Configurar variables para entrar al do
		num=parseInt(prompt("Ingrese un número: "));
		min=num;
		max=num;
		resp=prompt("Desea ingresas otro número? si/no ");

		// Establecer condiciones
		do
		{
			num=parseInt(prompt("Ingrese un número: "));
			if(num<min)
			{
				min=num
			}else if(num>max)
			{
				max=num
			}
			resp=prompt("Desea ingresas otro número? si/no ");

		} while(resp=="si")

		// Cargar resultados en los campos
		document.getElementById("txtIdMaximo").value=max;
		document.getElementById("txtIdMinimo").value=min;
		
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

/*// Establecer condiciones
		while (resp=="si")
		{
			num=parseInt(prompt("Ingrese un número: "));
			if(num<min)
			{
				min=num
			}else if(num>max)
			{
				max=num
			}
			resp=prompt("Desea ingresas otro número? si/no ");
		}*/