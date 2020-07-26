/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos eh informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // Declarar variables
    let vLamp;
    let vMarca;
    let vPrecio;
    let vImp;

    // Tomar valores de campos
    vLamp=parseInt(document.getElementById("txtIdCantidad").value);
    vMarca=document.getElementById("Marca").value;

    // Precio estándar de lámparas
    vPrecio=vLamp*35;

    // Calcular variantes de descuento
    if(vLamp>=6)
    {
        vPrecio=vPrecio*0.5;
    }
    else if(vLamp==5)
    {
        switch(vMarca)
        {
        case "ArgentinaLuz":
        vPrecio=vPrecio*0.6;
        break;
        default:
        vPrecio=vPrecio*0.7
        break;
        }
    }    
    else if(vLamp==4)
    {
        switch(vMarca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
            vPrecio=vPrecio*0.75;
            break;
            default:
            vPrecio=vPrecio*0.8;
            break;
        }
    }
    else if(vLamp==3)
        switch(vMarca)
        {
            case "ArgentinaLuz":
            vPrecio=vPrecio*0.85;
            break;
            case "FelipeLamparas":
            vPrecio=vPrecio*0.9;
            default:
            vPrecio=vPrecio*0.95;
        }
    /// Calcular impuesto y mostrarlo
    if(vPrecio>120)
    {
        vPrecio=vPrecio*1.1
        vImp=vPrecio*0.1
        alert("IIBB. Usted pago $"+vImp.toFixed(2));
    }
    // Pone el valor del precio en el campo "Precio con descuento"
    document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
}