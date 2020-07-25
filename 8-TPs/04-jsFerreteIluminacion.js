/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    // Declarar variables
    let vLamp;
    let vMarca;
    let vPrecio;
    let vImpuesto;

    // Tomar valores de campos
    vLamp=parseInt(document.getElementById("txtIdCantidad").value);
    vMarca=document.getElementById("Marca").value;
    vImpuesto=(document.getElementById("txtIdprecioDescuento").value)*1.10

    if (vLamp>=6)
    {
        vPrecio=(vLamp*35-(vLamp*35*0.5));
        document.getElementById("txtIdprecioDescuento").value=vPrecio;
    }
    if(vLamp==5 && vMarca=="ArgentinaLuz")
    {
        vPrecio=(vLamp*35-(vLamp*35*0.4));
        document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
    }    
    else if (vLamp==5 && vMarca!=="ArgentinaLuz")
    {        
        vPrecio=(vLamp*35-(vLamp*35*0.3));
        document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
    }
    if(vLamp==4 && vMarca=="ArgentinaLuz" || vMarca=="FelipeLamparas")
    {
        vPrecio=(vLamp*35-(vLamp*35*0.25));
        document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
    }
    else if(vLamp==4 && vMarca!="ArgentinaLuz" || vMarca!="FelipeLamparas")
    {
            vPrecio=(vLamp*35-(vLamp*35*0.2));
            document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
    }
    if(vLamp==3 && vMarca=="ArgentinaLuz")
    {
        vPrecio=(vLamp*35-(vLamp*35*0.15));
        document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
    }
    else if(vLamp==3 && vMarca=="FelipeLamparas")
    {
        vPrecio=(vLamp*35-(vLamp*35*0.1));
        document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
    }
    else if(vLamp==3 && vMarca!="ArgentinaLuz" || vMarca!="FelipeLamparas")
    {
        vPrecio=(vLamp*35-(vLamp*35*0.05));
        document.getElementById("txtIdprecioDescuento").value=vPrecio.toFixed(2);
    }
    if(vLamp<3)
    {
        vPrecio=vLamp*35;
        document.getElementById("txtIdprecioDescuento").value=vPrecio;
    }
    if(vPrecio>120)
    {
        document.getElementById("txtIdprecioDescuento").value=vImpuesto;
        alert("IIBB Usted pago "+vImpuesto)
    }
}

