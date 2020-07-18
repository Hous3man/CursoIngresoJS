/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// Declarar variables
	let NumUno;
	let NumDos;
	let Result;
	
	// Convertir a Int los valores dados en el campo de texto
	NumUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	NumDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// Sumar valores
	Result=NumUno+NumDos;

	// Mostrar suma
	alert("La suma es "+Result);
}
function restar()
{
	// Declarar variables
	let NumUno;
	let NumDos;
	let Result;

	// Convertir a Int los valores dados en el campo de texto
	NumUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	NumDos=parseInt(document.getElementById("txtIdNumeroDos").value);

	// Restar valores
	Result=NumUno-NumDos;

	// Mostrar diferencia
	alert("La diferencia es "+Result);
}
function multiplicar()
{ 
	// Declarar variables
	let NumUno;
	let NumDos;
	let Result;

	// Convertir a Int los valores dados en el campo de texto
	NumUno=parseInt(document.getElementById("txtIdNumeroUno").value);
	NumDos=parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// Multiplicar valores
	Result=NumUno*NumDos;

	// Mostrar producto
	alert("El producto es "+Result);
}
function dividir()
{
	// Declarar variables
	let NumUno;
	let NumDos;
	let Result;
	
	// Convertir a Float los valores dados en el campo de texto
	NumUno=parseFloat(document.getElementById("txtIdNumeroUno").value);
	NumDos=parseFloat(document.getElementById("txtIdNumeroDos").value);
	
	// Dividir valores
	Result=NumUno/NumDos;

	// Mostrar cociente
	alert("El cociente es "+Result.toFixed(2));
}