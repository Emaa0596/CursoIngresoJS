/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    

function Sumar () 
{   
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;
    let resultadoPromedio;
    let PrecioFinal;
    
    precioUno = document.getElementById("txtIdPrecioUno").value; 
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value; 
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value; 
    precioTres = parseInt(precioTres);

    resultadoSuma = precioUno+precioDos+precioTres;

    //console.log muestra el resultado en la consola, como alert pero en consola del chrome
    console.log("El resultado de la suma es " + resultadoSuma);
    


}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;
    let resultadoPromedio;
    let PrecioFinal;
    
    precioUno = document.getElementById("txtIdPrecioUno").value; 
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value; 
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value; 
    precioTres = parseInt(precioTres);

    resultadoPromedio = (precioUno+precioDos+precioTres)/3;
    console.log("el promedio de los precios es " + resultadoPromedio);

}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultadoSuma;
    let resultadoPromedio;
    let precioFinal;
    let IVA;

    IVA = 21;
    
    precioUno = document.getElementById("txtIdPrecioUno").value; 
    precioUno = parseInt(precioUno);
    precioDos = document.getElementById("txtIdPrecioDos").value; 
    precioDos = parseInt(precioDos);
    precioTres = document.getElementById("txtIdPrecioTres").value; 
    precioTres = parseInt(precioTres);

    resultadoSuma = precioUno+precioDos+precioTres;

    precioFinal =resultadoSuma + (resultadoSuma * IVA/100);
    

    console.log("El precio con iva es " + precioFinal);
}