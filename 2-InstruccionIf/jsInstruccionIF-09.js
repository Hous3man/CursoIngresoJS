function mostrar()
{
	// Declarar variables
	let vMax=10;
	let vMin=1;
	let vNum;

	//Genero el número random entre 1 y 10 
	vNum=Math.round(Math.random()*(vMax-vMin)+vMin);

	//Muestro el número random generado
	alert(vNum);

}//FIN DE LA FUNCIÓN