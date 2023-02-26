/*Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	let tipoProducto;
	let precioProducto;
	let cantidadUnidades;
	let fabricante;
	let banderaJabon;
	let unidadesJabonMasCaro;
	let marcaJabonMascaro;
	let precioJabonMasCaro;
	let acumuladorUnidadesAlcohol;
	let acumuladorUnidadesBarbijo;
	let acumuladorUnidadesJabon;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabones;
	let tipoConMasUnidades;
	let promedio;

	acumuladorUnidadesAlcohol = 0;
	acumuladorUnidadesBarbijo = 0;
	acumuladorUnidadesJabon = 0;
	contadorJabones = 0;
	contadorBarbijo = 0;
	contadorAlcohol = 0;
	banderaJabon = true;
	precioJabonMasCaro = 0;

	for(let i = 0; i < 5; i++){
		tipoProducto = prompt("Ingrese tipo de producto: 'jabon', 'barbijo' o 'alcohol'");
		while(tipoProducto != "jabon" && tipoProducto != "barbijo" && tipoProducto != "alcohol"){
			tipoProducto = prompt("Error. Ingrese tipo de producto: 'jabon', 'barbijo' o 'alcohol'");
		}
		precioProducto = parseFloat(prompt("Ingrese el precio"));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300){
			precioProducto = parseFloat(prompt("Error.Ingrese el precio"));
		}
		cantidadUnidades = parseInt(prompt("Ingrese cantidad de unidades"));
		while(isNaN(cantidadUnidades) || cantidadUnidades > 1000 || cantidadUnidades < 0){
			cantidadUnidades = parseInt(prompt("Error.Ingrese cantidad de unidades"));
		}
		fabricante = prompt("Ingrese el fabricante");

		switch(tipoProducto){
			case "jabon":
						if(banderaJabon == true || precioProducto > precioJabonMasCaro){
							precioJabonMasCaro = precioProducto
							unidadesJabonMasCaro = cantidadUnidades;
							marcaJabonMascaro = fabricante;
							banderaJabon = false;
						}
						contadorJabones = contadorJabones +1;
						acumuladorUnidadesJabon = acumuladorUnidadesJabon + cantidadUnidades;
				break
			case "barbijo":
						acumuladorUnidadesBarbijo = acumuladorUnidadesBarbijo + cantidadUnidades;
						contadorBarbijo = contadorBarbijo +1;
				break
			case "alcohol":
						contadorAlcohol = contadorAlcohol +1;
						acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + cantidadUnidades;
				break
		}
		if(acumuladorUnidadesJabon > acumuladorUnidadesAlcohol && acumuladorUnidadesJabon > acumuladorUnidadesBarbijo){
			tipoConMasUnidades = "Jabon";
			promedio = acumuladorUnidadesJabon/contadorJabones;
		}
		else if(acumuladorUnidadesBarbijo > acumuladorUnidadesAlcohol && acumuladorUnidadesBarbijo > acumuladorUnidadesJabon){
			tipoConMasUnidades = "Barbijo";
			promedio = acumuladorUnidadesBarbijo/contadorBarbijo
		}
		else{
			tipoConMasUnidades = "Alcohol";
			promedio = acumuladorUnidadesAlcohol/contadorAlcohol;
		}


	}
	/*
		a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
		c) Cuántas unidades de Barbijos se compraron en total
		*/

		document.write("El jabon mas caro es: " + marcaJabonMascaro + " con un total de " + unidadesJabonMasCaro + " unidades"+"<br>");
		document.write("Las unidades de barbijos en total es: " + acumuladorUnidadesBarbijo+"<br>");
		document.write("El tipo con mas unidades en el total de la compra es: " + tipoConMasUnidades + " con un promedio de: "+ promedio+ " unidades.")
}
