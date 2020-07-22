/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// Declarar variables
	var numUno;
	var numDos;
	var result;

	// Asignar variables a elementos por ID
	numUno = document.getElementById("txtIdNumeroUno").value;
	numDos = document.getElementById("txtIdNumeroDos").value;
	result = parseInt(numUno) + parseInt(numDos);

	// Mostrar sumado
	alert("La suma es "+result);
}