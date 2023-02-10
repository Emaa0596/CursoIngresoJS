//Emanuel Diaz
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
 	let lamparas;
    let precio; 
    let marca;
    let impuesto;
    let porcentaje;

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35;

    if(lamparas > 5){
        porcentaje = 50;
    }
    if (lamparas == 5) {
        if(marca == "Argentinaluz"){
        porcentaje = 40;
        }
        else {
            porcentaje = 30
        }
    if (lamparas == 4){
        if(marca == "Argentinaluz" || "FelipeLamparas")
            porcentaje = 25;
        }
        else{
            porcentaje = 20;
        }
    if (lamparas == 3){
        if (marca == "Argentinaluz")
        porcentaje = 15;
        }
        else if (marca == "FelipeLamparas"){
            porcentaje = 10;
        }
        else{
            porcentaje = 5;
        }
    }

    precio = precio * lamparas
    precio = precio - precio * porcentaje/100;
    if (precio >= 120){
        impuesto = precio + precio * 10/100;
        impuesto = impuesto - precio;
        alert("Usted pago $" + impuesto + " de IIBB");
    }

    document.getElementById("txtIdprecioDescuento").value = precio
}
