/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	// Declarar variables
	let NumUno;
	let NumDos;
	let Result;

	// Convertir a Int los valores dados en el campo de texto
	NumUno=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	NumDos=parseInt(document.getElementById("txtIdNumeroDivisor").value);

	// Realizar calculo del resto
	Result=NumUno%NumDos;

	// Mostrar resto
	alert("El resto es "+Result);
}
