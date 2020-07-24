function mostrar()
{
// Declarar variables
let vEdad;
let vEstCivil;

// Tomar la edad y el estado eivil de los campos de texto
vEdad=parseInt(document.getElementById("txtIdEdad").value);
vEstCivil=document.getElementById("estadoCivil").value;

// Declarar si es menor de 18 años, si es soltero y monstrar mensaje requerido
if(vEdad<18 && vEstCivil!="Soltero")
{
	alert("Es muy pequeño para NO ser soltero.")
}
	
}//FIN DE LA FUNCIÓN