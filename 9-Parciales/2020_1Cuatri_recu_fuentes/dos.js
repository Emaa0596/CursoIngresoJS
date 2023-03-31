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
/* "El cine"
De un cine se deben ingresar una cantidad indeterminada 
de venta de entradas diaria, validando los
siguientes datos:
nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
a)El nombre de la película más cara de tipo 4D.
b)Informar el precio total de la venta del día.
c)El nombre de la película con menos cantidad de entradas.
d)El tipo de pelicula más vista y la cantidad de entradas. 
e)El nombre de la pelicula más barata en 3D. 
 */
function mostrar() {

 let nombre;
 let precio;
 let respuesta ="si";
 let peliculaMenosEntradas;
 let contadorPeliculaMenosEntradas = 0;
 let nombreMenosEntradas;
 let tipoPeliculaMasvista;
 let contadorPeliculaMasvista = 0;
 let precioTotalDia;
 let cantidadEntradas;
 let tipo;
 let peliculaMasCara;
 let banderaMasCara = true;
 let precioMasCara = 0;
 let peliculaMenosVista = 0;
 let banderaMasVista = true;
 let banderaMasBarata = true;
 let precioMasBarata = 0;
 let nombreMasBarata;
 let contador3D = 0;
 let contador4D = 0;
 let acumuladorPrecio = 0;
 let banderaMenosENtradas;
 let peliculaMasVista;


 while (respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
  nombre = prompt("Ingrese el nombre de la pelicula");
  precio = parseFloat(prompt("Ingrese el precio"));
  while(isNaN(precio) || precio > 30000 || precio < 1){
    precio = parseFloat(prompt("Error.Ingrese el precio"));
  }
  cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas"));
  while(isNaN(cantidadEntradas) || cantidadEntradas < 1 || cantidadEntradas > 300){
    cantidadEntradas = parseInt(prompt("Error.Ingrese la cantidad de entradas"));
  }
  tipo = prompt("Ingrese el tipo de entrada: '3D' o '4D'");
  while(tipo != "3D" && tipo != "4D" && tipo != "3d" && tipo != "4d"){
    tipo = prompt("Error.Ingrese el tipo de entrada: '3D' o '4D'");
  }
  switch(tipo){
    case "3d":
    case "3D":
      if(banderaMasBarata = true || precioMasBarata < precio){
        nombreMasBarata = nombre;
        precioMasBarata = precio;
        banderaMasBarata = false;
      }
      contador3D = contador3D + cantidadEntradas;
      acumuladorPrecio = acumuladorPrecio + (cantidadEntradas * precio);
      break
    case "4d":
    case "4D":
      if(banderaMasCara = true || precioMasCara > precio){
        peliculaMasCara = nombre;
        precioMasCara = precio;
        banderaMasCara = false;
      }
      contador4D = contador4D + cantidadEntradas;
      acumuladorPrecio = acumuladorPrecio + (cantidadEntradas * precio);
      break
  }
  if(banderaMenosENtradas == true || contadorPeliculaMenosEntradas < cantidadEntradas){
    nombreMenosEntradas = nombre;
    contadorPeliculaMenosEntradas = cantidadEntradas;
    banderaMenosENtradas = false;
  }
  if(contador3D > contador4D){
    tipoPeliculaMasvista = "3D";
  }
  else{
    tipoPeliculaMasvista = "4D";
  }
  let acumulador = 0;
  respuesta = prompt("Desea seguir ingresando productos? 'si' o 'no'?");
 }// fin del while
 precioTotalDia = acumuladorPrecio;
 console.log("El nombre de la pelicula mas cara 4D es: "+peliculaMasCara);
 console.log("El precio de la venta del dia es: " + precioTotalDia);
 console.log("El nombre de la película con menos cantidad de entradas es: "+nombreMenosEntradas);
 console.log("El tipo de pelicula más vista y la cantidad de entradas es: "+ tipoPeliculaMasvista + "con "+ contadorPeliculaMasvista +" cantidad de entradas");
 console.log("La pelicula mas barata en 3d es: " + nombreMasBarata);
 /*
 nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
a)El nombre de la película más cara de tipo 4D.
b)Informar el precio total de la venta del día.
c)El nombre de la película con menos cantidad de entradas.
d)El tipo de pelicula más vista y la cantidad de entradas. 
e)El nombre de la pelicula más barata en 3D. 
 */

}//fin de funcion.




/*
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
/*
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
*/