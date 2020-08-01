/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	// Declarar variable
	let vSex;

	// Configurar iteración pedida con do while
	do
	{
	vSex = prompt("Ingrese f ó m .");
	}while(vSex!="m" && vSex!="f");

	// Agregarlo al campo según corresponda
	if(vSex=="m")
	{
		document.getElementById("txtIdSexo").value="El sexo es masculino";
	}
	else
	{
		document.getElementById("txtIdSexo").value="El sexo es femenino";
	}
	
}//FIN DE LA FUNCIÓN