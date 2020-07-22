/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	// Declarar variables
	let numUno;
	let numDos;
	let result;

	// Convertir a Int los valores dados en el campo de texto
	numUno=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numDos=parseInt(document.getElementById("txtIdNumeroDivisor").value);

	// Realizar calculo del resto
	result=numUno%numDos;

	// Mostrar resto
	alert("El resto es "+result);
}
