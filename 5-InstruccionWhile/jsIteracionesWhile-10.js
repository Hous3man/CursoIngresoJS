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
function mostrar() {
	// Declarar contadores, aculadores y variables 
	let num = 0;
	let sumNeg = 0;
	let sumPos = 0;
	let cantPos = 0;
	let cantNeg = 0;
	let cantCeros = 0;
	let cantPares = 0;
	// variables para que no de cero la división de promedios
	let cantPoses0 = false;
	let cantNeges0 = false;

	let promPos = 0;
	let promNeg = 0;
	let difPosYNeg = 0;
	let resp = "si";

	// calcular y definir condiciones
	do {
	// Do While para cuando ingresa un string
		do {
			num = parseInt(prompt("Ingrese un número: "));
			if(isNaN(num))
			{
				alert("No ingresó un número")
			}
		} while (isNaN(num))
		if (num > 0) {
			sumPos = sumPos + num;
			cantPos = cantPos + 1;
		}
		else if (num < 0) {
			sumNeg = sumNeg + num;
			cantNeg = cantNeg + 1;
		}
		else if (num === 0) {
			cantCeros = cantCeros + 1;
		}
		if (num % 2 === 0) {
			cantPares = cantPares + 1;
		}
		resp = prompt("Desea ingresas otro número? si/no ");
	} while (resp === "si");
	// Ifs para sacar NaN de las cuentas de los promedios
	if(cantPos===0)
	{
		cantPos=1;
		cantPoses0 = true;
	}
	if(cantNeg===0)
	{
		cantNeg=1;
		cantNeges0 = true;
	}
	// Calcular promedios
	promPos = sumPos / cantPos;
	promNeg = sumNeg / cantNeg;
	difPosYNeg = (sumPos + (sumNeg));
	// Mostrar resultados
	document.write("La suma de negativos es : " + sumNeg + "<br>");
	document.write("La suma de positivos es : " + sumPos + "<br>");
	// Ifs por si no ingresan postivos y/o negativos
	if(cantPoses0)
	{
		document.write("La cantidad de positivos es : " + 0 + "<br>");
	}else {
		document.write("La cantidad de positivos es : " + cantPos + "<br>");
	}
	if(cantNeges0)
	{
		document.write("La cantidad de negativos es : " + 0 + "<br>");
	}else {
		document.write("La cantidad de negativos es : " + cantNeg + "<br>");
	}
	document.write("La cantidad de ceros es : " + cantCeros + "<br>");
	document.write("La cantidad de pares es : " + cantPares + "<br>");
	document.write("El promedio de positivos es : " + promPos.toFixed(2) + "<br>");
	document.write("El promedio de negativos es : " + promNeg.toFixed(2) + "<br>");
	document.write("La diferencia entre positivos y negativos es : " + difPosYNeg + "<br>");

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