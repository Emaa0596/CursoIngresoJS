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

    lamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35;

    if(lamparas >= 6){
        precio = precio - precio * (50/100);
    }
    else {
        if(lamparas == 5 && marca == "Argentinaluz"){
        precio = precio - precio * (40/100);
        }
        if(lamparas == 5 && marca != "Argentinaluz"){
            precio = precio - precio * (30/100);
        }
        if (lamparas == 4 && (marca == "Argentinaluz" || "FelipeLamparas")){
            precio = precio - precio * (25/100);
        }
        if (lamparas == 4 && (marca != "Argentinaluz" || "FelipeLamparas")){
        precio = precio - precio * (20/100);
        }
        if (lamparas == 3 && marca == "Argentinaluz"){
            precio = precio - precio * (15/100);
        }
        if (lamparas == 3 && marca == "FelipeLamparas"){
            precio = precio - precio * (10/100);
        }
        if (lamparas == 3 && (marca != "Argentinaluz" || "FelipeLamparas")){
            precio = precio - precio * (5/100);
        }
    }
    precio = precio * lamparas
    
    if (precio > 120){
        impuesto = precio + precio * (10/100);
        impuesto = impuesto - precio;
        alert("Usted pago $" + impuesto + " de IIBB");
    }
    document.getElementById("txtIdprecioDescuento").value = precio
}
