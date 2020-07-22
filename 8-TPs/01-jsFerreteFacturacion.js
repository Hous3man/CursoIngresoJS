/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	// Declarar variables
	let precioUno;
    let precioDos;
    let precioTres;
    let result;

    // Tomar precios ingresados
    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    // Sumar precios
    result=precioUno+precioDos+precioTres;

    // Mostrar Resultado
    alert("La suma es "+result.toFixed(2));
}
function Promedio () 
{
	// Declarar variables
	let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    // Tomar precios ingresados
    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    // Calcular Promedio
    promedio=(precioUno+precioDos+precioTres)/3;

    // Mostrar Promedio
    alert("El promedio es "+promedio.toFixed(2));
}
function PrecioFinal () 
{
	// Declarar variables
	let precioUno;
    let precioDos;
    let precioTres;
    let precioFinal;

    // Tomar precios ingresados
    precioUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    // Calcular Precio final
    precioFinal=(precioUno+precioDos+precioTres)*1.21;

    // Mostrar Precio final
    alert("El precio final es "+precioFinal.toFixed(2));
}