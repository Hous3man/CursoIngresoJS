/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// Declarar variables
	let numUno;
	let numDos;
	let result;
	
	// Convertir a Int los valores dados en el campo de texto
	numUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// Sumar valores
	result=numUno+numDos;

	// Mostrar suma
	alert("La suma es "+result);
}
function restar()
{
	// Declarar variables
	let numUno;
	let numDos;
	let result;

	// Convertir a Int los valores dados en el campo de texto
	numUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos=parseInt(document.getElementById("txtIdNumeroDos").value);

	// Restar valores
	result=numUno-numDos;

	// Mostrar diferencia
	alert("La diferencia es "+result);
}
function multiplicar()
{ 
	// Declarar variables
	let numUno;
	let numDos;
	let result;

	// Convertir a Int los valores dados en el campo de texto
	numUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// Multiplicar valores
	result=numUno*numDos;

	// Mostrar producto
	alert("El producto es "+result);
}
function dividir()
{
	// Declarar variables
	let numUno;
	let numDos;
	let result;
	
	// Convertir a Float los valores dados en el campo de texto
	numUno=parseFloat(document.getElementById("txtIdNumeroUno").value);
	numDos=parseFloat(document.getElementById("txtIdNumeroDos").value);
	
	// Dividir valores
	result=numUno/numDos;

	// Mostrar cociente
	alert("El cociente es "+result.toFixed(2));
}