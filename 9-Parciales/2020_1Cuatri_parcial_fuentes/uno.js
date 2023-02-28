/*
Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/
function mostrar()
{

let tipoProducto;
let importeProducto;
let procedencia;
let peso;
let respuesta = "si";
let nombreProducto;
let banderaMasPesado = true;
let banderaMasCaro = true;
let banderaMasBarato = true;
let nombreMasPesado;
let masPesado = 0;
let masBarato = 0;
let masCaro = 0;
let nombreMasBarato;
let nombreMasCaro;
let totalProductos = 0;
let totalProductosElaborados = 0;
let tipoMasMercaderia;
let porcentajeElaborados;
let totalLimpieza = 0;
let totalOtros =0;
let totalComestibles =0;
let promedioLimpieza;
let promedioOtros;
let promedioComestible;
let cantidadComestibles = 0;
let cantidadOtros = 0;
let cantidadLimpieza = 0;

while (respuesta == "si" || respuesta == "Si" || respuesta == "SI"){
    tipoProducto = prompt("Ingrese el tipo de producto: 'Limpieza','Comestible' o 'Otros'");
    while (tipoProducto != "Limpieza" && tipoProducto != "Comestible"
    && tipoProducto != "Otros" && tipoProducto != "limpieza" && tipoProducto != "comestible"
    && tipoProducto != "otros"){
      tipoProducto = prompt("Error.Ingrese el tipo de producto: 'limpieza','comestible' o 'otros'");
    }
	nombreProducto = prompt("Ingrese el nombre del producto");
	importeProducto = parseFloat(prompt("Ingrese el importe del producto"));
	while(isNaN(importeProducto) || importeProducto > 1000 || importeProducto < 0){
		importeProducto = parseFloat(prompt("Error.Ingrese el importe del producto"));
	}
	procedencia = prompt("Ingrese la procedencia: importado,nacional o elaborado.");
	while(procedencia != "elaborado" && procedencia != "Elaborado" && procedencia != "Nacional" && procedencia != "nacional" && procedencia != "Importado"
	 && procedencia != "importado"){
		procedencia = prompt("Error.Ingrese la procedencia: importado,nacional o elaborado.");
	}
	peso = parseFloat(prompt("Ingrese el peso del producto"));
	while(isNaN(peso) || peso < 0 || peso > 30){
		peso = parseFloat(prompt("Error.Ingrese el peso del producto"));
	}

	if(banderaMasCaro == true || masCaro < importeProducto){
		masCaro = importeProducto;
		nombreMasCaro = nombreProducto;
		banderaMasCaro = false;
	}
	
	if(procedencia == "elaborado" || procedencia == "Elaborado" || procedencia == "ELABORADO"){
		totalProductosElaborados = totalProductosElaborados +1;
		if(banderaMasBarato == true || masBarato < importeProducto){
			nombreMasBarato = nombreProducto;
			masBarato = importeProducto
			banderaMasBarato = false;
		}
	}
	totalProductos = totalProductos + 1;
	switch(tipoProducto){
		case "Comestible":
		case "comestible":
			cantidadComestibles = cantidadComestibles + 1;
			totalComestibles = totalComestibles + importeProducto;
			if(banderaMasPesado == true || masPesado < peso){
				nombreMasPesado = nombreProducto
				masPesado = peso;
				banderaMasPesado = false;
			}
			break
		case "Limpieza":
		case "limpieza":
			cantidadLimpieza = cantidadLimpieza +1;
			totalLimpieza = totalLimpieza + importeProducto;
			break
		case "Otros":
		case "otros":
			cantidadOtros = cantidadOtros +1;
			totalOtros = totalOtros + importeProducto;
			break 
		}
	respuesta = prompt("Desea seguir ingresando productos? 'Si' o 'No'?");
	}// FIN DEL WHILE

	if(cantidadComestibles > cantidadLimpieza && cantidadComestibles > cantidadOtros){
		tipoMasMercaderia = "Comestibles"
	}
	else if(cantidadLimpieza > cantidadComestibles && cantidadLimpieza > cantidadOtros){
		tipoMasMercaderia = "Limpieza";
	}
	else{
		tipoMasMercaderia = "Otros";
	}
	porcentajeElaborados = totalProductosElaborados/ totalProductos*100;
	promedioComestible = totalComestibles / cantidadComestibles;
	promedioLimpieza = totalLimpieza/cantidadLimpieza;
	promedioOtros = totalOtros / cantidadOtros;

	document.write("El nombre del mas pesado de los comestibles es: " + nombreMasPesado +"<br>");
	document.write("El nombre del mas caro de los productos es: " + nombreMasCaro +"<br>");
	document.write("El nombre del mas barato de los productos elaborados es: "+nombreMasBarato +"<br>");
	document.write("El tipo con mas mercaderia es: "+tipoMasMercaderia +"<br>");
	document.write("El porcentaje de los elaborados por sobre el total es: "+porcentajeElaborados+"%" +"<br>");
	document.write("El promedio de los comestibles es de: $"+promedioComestible+"<br>");
	document.write("El promedio de los de limpieza es de: $"+promedioLimpieza +"<br>");
	document.write("El promedio de otros es de: $"+promedioOtros); 


}





/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total 
*/

/*
parcial uno: 

	let tipoProducto;
	let precioProducto;
	let marca;
	let fabricante;
	let unidades;
	let masBaratoAlcohol;
	let contadorAlcohol;
	let fabricanteBarato;
	let banderaAlcohol;
	let tipoConMasUnidades;
	let promedioMasUnidades;
	let contadorJabones;
	let contadorBarbijo;
	let acumuladorUnidadesJabon;
	let acumuladorUnidadesBarbijo;
	let acumuladorUnidadesAlcohol;

	banderaAlcohol = true;
	contadorAlcohol = 0;
	contadorJabones = 0;
	contadorAlcoholMasBarato = 0;
	contadorBarbijo = 0;
	acumuladorUnidadesAlcohol = 0;
	acumuladorUnidadesBarbijo = 0;
	acumuladorUnidadesJabon = 0;
	

	for(let i = 0; i < 5; i++){

		tipoProducto = prompt("Ingrese tipo de producto: 'j' para jabon, 'b' para barbijo o 'a' para alcohol.");
		while(!isNaN(tipoProducto) && tipoProducto != "J" && tipoProducto != "j" && tipoProducto != "b" && tipoProducto != "B" && tipoProducto != "a" && tipoProducto != "A"){
			tipoProducto = prompt("Error. Ingrese tipo de producto: 'j' para jabon, 'b' para barbijo o 'a' para alcohol.")
		}
		precioProducto = parseFloat(prompt("Ingrese el precio del producto."));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300){
			precioProducto = parseFloat(prompt("Error.Ingrese el precio del producto (entre 100 y 300)."));
		}
		unidades = parseInt(prompt("Ingrese las unidades"));
		while(isNaN(unidades) || unidades < 0 || unidades > 1000){
			unidades = parseInt(prompt("Error. Ingrese las unidades (hasta 1000)"));
		}
		marca = prompt("Ingrese la marca");
		fabricante = prompt("Ingrese el fabricante");

		switch(tipoProducto){
			case "J":
			case "j":
					contadorJabones = contadorJabones + 1;
					acumuladorUnidadesJabon = acumuladorUnidadesJabon + unidades
				break
			case "a":
			case "A":
					if(banderaAlcohol == true || precioProducto > masBaratoAlcohol){
						masBaratoAlcohol = unidades;
						fabricanteBarato = fabricante;
						banderaAlcohol = false;
					}
					contadorAlcohol = contadorAlcohol + 1;
					acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + unidades;
				break
			case "b":
			case "B":
					contadorBarbijo = contadorBarbijo + 1;
					acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + unidades;
				break
		}

	}

	if(contadorAlcohol > contadorBarbijo && contadorAlcohol > contadorJabones){
		promedioMasUnidades = acumuladorUnidadesAlcohol/contadorAlcohol;
		tipoConMasUnidades = "Alcohol";
	}
	else if(contadorBarbijo > contadorAlcohol && contadorBarbijo > contadorJabones){
		promedioMasUnidades = acumuladorUnidadesBarbijo/contadorBarbijo;
		tipoConMasUnidades = "Barbijo";

	}
	else{
		promedioMasUnidades = acumuladorUnidadesJabon/contadorJabones;
		tipoConMasUnidades = "Jabon";

	}

	document.write("El alcohol mas barato es " + fabricanteBarato + " y se compraron " + masBaratoAlcohol + " unidades" + "<br>" );
	document.write("el tipo con mas unidades es " + tipoConMasUnidades + " con un promedio de "+ promedioMasUnidades + " unidades por compra"+"<br>" );
	document.write("La cantidad de jabones en total es: " + contadorJabones);
*/