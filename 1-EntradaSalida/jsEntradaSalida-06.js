/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// Declarar variables
	var NumUno;
	var NumDos;
	var Result;

	// Asignar variables a elementos por ID
	NumUno = document.getElementById("txtIdNumeroUno").value;
	NumDos = document.getElementById("txtIdNumeroDos").value;
	Result = parseInt(NumUno) + parseInt(NumDos);

	// Mostrar sumado
	alert("La suma es "+Result);
}