/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	// Declarar contadores y variables 
	let num;
	let sumNeg=0;
	let sumPos=0;
	let cantPos=0;
	let cantNeg=0;
	let cantCeros=0;
	let cantPares=0;
	let promPos;
	let promNeg;
	let difPosYNeg;
	let resp="si";

	do
	{
		num=parseInt(prompt("Ingrese un número: "));
		if(num>0)
		{
			sumPos=sumPos+num;
			cantPos=num+1;
		}
		else if(num<0)
		{
			sumNeg=sumNeg+num;
			cantNeg=cantNeg+1;
		}
		else if(num=0)
		{
			cantCeros=cantCeros+1;
		}
		else if(num=num*2)
		{
			cantPares=cantPares+1;
		}
		resp=prompt("Desea ingresas otro número? si/no ");
	}while(resp=="si");

	promPos=sumPos/cantPos;
	promNeg=sumNeg/cantNeg;
	difPosYNeg=(sumPos+(sumNeg));

	document.write("La suma de negativos es :"+sumNeg+"<br>");
	document.write("La suma de positivos es :"+sumPos+"<br>");
	document.write("La cantidad de positivos es :"+cantPos+"<br>");
	document.write("La cantidad de negativos es :"+cantNeg+"<br>");
	document.write("La cantidad de ceros es :"+cantCeros+"<br>");
	document.write("La cantidad de pares es :"+cantPares+"<br>");
	document.write("El promedio de positivos es :"+promPos+"<br>");
	document.write("El promedio de positivos es :"+promNeg+"<br>");
	document.write("La diferencia entre positivos y negativos es :"+difPosYNeg+"<br>");

}//FIN DE LA FUNCIÓN
/*//declarar contadores y variables 
var respuesta;
var numeroIngresado;
var sumaNegativos=0;

respuesta="si";

while(respuesta=="si")
{
	
	respuesta=prompt("desea continuar?");
}//fin del while

document.write("la suma de negativos es :"+sumaNegativos);*/