 /*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de 
la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
e)Cuantas bolsas de arena se compraron en total, y el promedio por compra. 
*/
function mostrar() {
  let tipoProducto;
  let cantidad;
  let precioPorBolsa;
  let descuento;
  let cantidadBolsasTotal;
  let importeTotalBruto;
  let importeConDescuento;
  let banderaCal;
  let banderaCemento;
  let bolsaCalMasCara;
  let bolsaMasBarataCemento;
  let contadorArena;
  let contadorBolsasArena;
  let respuesta;
  let promedio;
  let mensajeDescuento;

  descuento = 0;
  banderaCal = true;
  banderaCemento = true;
  contadorArena = 0;
  respuesta = "si";
  cantidadBolsasTotal = 0;
  contadorBolsasArena = 0;
  importeTotalBruto = 0;

  while (respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
    tipoProducto = prompt("Ingrese el tipo de producto: 'Cal','Arena' o 'Cemento'");
    while (tipoProducto != "cal" && tipoProducto != "Cal"
    && tipoProducto != "Arena" && tipoProducto != "arena" && tipoProducto != "cemento"
    && tipoProducto != "Cemento"){
      tipoProducto = prompt("Error.Ingrese el tipo de producto: 'Cal','Arena' o 'Cemento'");
    }
    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while(isNaN(cantidad) || cantidad < 0 || cantidad > 300){
      cantidad = parseInt(prompt("Error.Ingrese la cantidad de bolsas"));
    }
    precioPorBolsa = parseFloat(prompt("Ingrese el precio por bolsa"));
    while(isNaN(precioPorBolsa) || precioPorBolsa < 0 || precioPorBolsa > 10000){
      precioPorBolsa = parseFloat(prompt("Error.Ingrese el precio por bolsa"));
    }
/*al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
e)Cuantas bolsas de arena se compraron en total, y el promedio por compra. 
*/

    switch(tipoProducto){
      case "Cal":
      case "cal":
        if(banderaCal == true || precioPorBolsa > bolsaCalMasCara){
          bolsaCalMasCara = precioPorBolsa;
          banderaCal = false;
        }
        break
      case "Cemento":
      case "cemento":
        if(banderaCemento == true || precioPorBolsa < bolsaMasBarataCemento){
          bolsaMasBarataCemento = precioPorBolsa;
          banderaCemento = false;
        }
        break
      case "Arena":
      case "arena":
          contadorArena = contadorArena + 1;
          contadorBolsasArena = contadorBolsasArena + cantidad;
        break
    }

    cantidadBolsasTotal = cantidadBolsasTotal + cantidad
    importeTotalBruto = importeTotalBruto + cantidad * precioPorBolsa;
    respuesta = prompt("Desea seguir ingresando productos? 'Si' o 'No'?");
  }

  if(cantidadBolsasTotal > 14){
    descuento = 10;
    importeConDescuento = importeTotalBruto - importeTotalBruto *(descuento/100);
    mensajeDescuento = "El importa a pagar con 10% de descuento es: " + importeConDescuento;
  }
  else if(cantidadBolsasTotal > 44){
    descuento = 30;
    importeConDescuento = importeTotalBruto - importeTotalBruto *(descuento/100);
    mensajeDescuento = "El importa a pagar con 30% de descuento es: " + importeConDescuento;
  }
  else{
    descuento = 0;
    mensajeDescuento = "No se aplico ningun descuento";
  }

  promedio = contadorBolsasArena / contadorArena;

  document.write("El total de la compra bruto sin descuento es de: $" + importeTotalBruto+ "<br>");
  document.write(mensajeDescuento+ "<br>");
  document.write("La bolsa mas cara de cal costo: $" +bolsaCalMasCara+ "<br>");
  document.write("La bolsa mas barata de cemento costo: $"+ bolsaMasBarataCemento+ "<br>");
  document.write("Se compraron un total de bolsas de arena de: "+contadorBolsasArena + "<br>");
  document.write("El promedio de de bolsas de arena por compra es de: "+ promedio + " bolsas");
}
