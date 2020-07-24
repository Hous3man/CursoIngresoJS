function mostrar()
{
	// Declarar variables
	let vMax=10;
	let vMin=1;
	let vNum;

	//Genero el número random entre 1 y 10 
	vNum=Math.round(Math.random()*(vMax-vMin)+vMin);

	//Definir mensaje según nota 
	if(vNum==9 || vNum==10)
	{
		alert(vNum+": Excelente");
	}
	else if(vNum>=4 && vNum <=8)
	{
		alert(vNum+": Aprobó");
	}
	else
	{
		alert(vNum+": Vamos, la proxima se puede.");
	}

}//FIN DE LA FUNCIÓN