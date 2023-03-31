/* Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos 
de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  let tipoProducto;
  let cantidadBolsas;
  let precioXBolsa;
  let descuento;
  let tipoMasCantidadBolsas;
  let precioMasCaro;
  let tipoMasCaro;
  let banderaMasCaro;
  let respuesta;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let acumuladorTotalPrecio;
  let precioTotalBruto;
  let precioConDescuento;
  let mensajeDescuento;
  let mensaje
  
  banderaMasCaro = true;
  respuesta = "si";
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0; 
  acumuladorTotalPrecio = 0;
  
  

  while(respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
    tipoProducto = prompt("Ingrese producto: 'arena', 'cal', o 'cemento'");

    while(tipoProducto != "arena" && tipoProducto !="cal" && tipoProducto != "cemento"){
      tipoProducto = prompt("Error.Ingrese producto: 'arena', 'cal', o 'cemento'");
    }

    cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while(isNaN(cantidadBolsas)){
      cantidadBolsas =parseInt(prompt("Error.Ingrese la cantidad de bolsas"));
    }

    precioXBolsa = parseFloat(prompt("Ingrese el precio por bolsa"));
    while(isNaN(precioXBolsa) || precioXBolsa < 1){
      cantidadBolsas = parseFloat(prompt("Error.Ingrese la cantidad de bolsas (mas de 0)"));
    }

    if(banderaMasCaro == true || precioXBolsa > precioMasCaro){
      precioMasCaro = precioXBolsa;
      tipoMasCaro = tipoProducto;
      banderaMasCaro = false;
    }
    
    acumuladorTotalPrecio = acumuladorTotalPrecio + cantidadBolsas * precioXBolsa;

    switch(tipoProducto){
      case "cal":
                acumuladorCal = acumuladorCal + cantidadBolsas;
        break
      case "arena":
                acumuladorArena = acumuladorArena + cantidadBolsas;
        break
      case "cemento":
                acumuladorCemento = acumuladorCemento + cantidadBolsas;
        break
    }

    respuesta = prompt("Desea ingresar mas datos? 'si' o 'no'?");

  }

  if(acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento){
    tipoMasCantidadBolsas = "Cal";
  }
  else if(acumuladorArena > acumuladorCemento && acumuladorArena >acumuladorCal){
    tipoMasCantidadBolsas = "Arena";
  }
  else{
    tipoMasCantidadBolsas = "Cemento";
  }

  cantidadBolsas = acumuladorCemento + acumuladorCal + acumuladorArena;

  if(cantidadBolsas > 29){
    descuento = 25;
  }
  else if(cantidadBolsas > 9 && cantidadBolsas < 30){
    descuento = 15;
  }
  else{
    descuento = 0;
  }
  
  precioTotalBruto = acumuladorTotalPrecio;
  precioConDescuento = precioTotalBruto - precioTotalBruto * (descuento/100);

  if(descuento !=0){
    mensajeDescuento = "El precio con descuento es: $"+ precioConDescuento;
  }
  else{
    mensajeDescuento = "No se aplico ningun decuento";
  }
 
  

  document.write("El importe total bruto es: $"+ precioTotalBruto+"<br>") ;
  document.write(mensajeDescuento + "<br>");
  document.write("El tipo de producto mas caro es: "+ tipoMasCaro+"<br>");
  document.write("El tipo con mas cantidad de bolsas es: "+ tipoMasCantidadBolsas+"<br>");

}
