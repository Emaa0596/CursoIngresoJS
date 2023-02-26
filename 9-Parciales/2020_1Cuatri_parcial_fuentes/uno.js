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
function mostrar()
{
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

		/*Se debe Informar al usuario lo siguiente:
		a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		b) Del tipo con mas unidades, el promedio por compra
		c) Cuántas unidades de jabones hay en total 
		*/

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

}
