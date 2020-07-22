/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    // Declarar variables
    let tempF;
    let tempC;

    // Tomar temperatura del campo "Ingrese Temperatura"
    tempF=parseFloat(document.getElementById("txtIdTemperatura").value);

    // Pasar de Fahrenheit a Centígrados
    tempC=(tempF-32)*5/9;

    // Mostrar mensaje de conversión
    alert(tempF.toFixed(2)+"º Fahrenheit son "+tempC.toFixed(2)+"º Centígrados");
}

function CentigradosFahrenheit () 
{
	  // Declarar variables
      let tempC;
      let tempF;
  
      // Tomar temperatura del campo "Ingrese Temperatura"
      tempC=parseFloat(document.getElementById("txtIdTemperatura").value);
  
      // Pasar de Fahrenheit a Centígrados
      tempF=(tempC*9/5)+32;
  
      // Mostrar mensaje de conversión
      alert(tempC.toFixed(2)+"º Centígrados son "+tempF.toFixed(2)+"º Fahrenheit");
}
