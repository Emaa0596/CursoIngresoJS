/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   
    let largo;
    let ancho;
    let radio;
    let alambre;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    radio = parseFloat(document.getElementById("txtIdRadio").value);

    alambre = largo + ancho + radio;
    alambre = alambre *3;

    console.log("Se necesitan "+ alambre + " Mts de alambre para este perimetro.");

    //calcular perimetro: suma de todos sus lados
    //parsefloat pasa a numero decimal (con ,)

}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseFloat(radio);
    perimetro = 2 * (3.14) * radio; 
    alambre = perimetro *3;

    console.log("Se necesitan "+ alambre + " Mts de alambre para este perimetro.");
    
    //perimetro de un circulo es 2 * pi (3,14) * radio
}
function Materiales () 
{
    let ancho;
    let largo;
    let cantCal;
    let cantCemento;
    let perimetro;

    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    largo = parseFloat(document.getElementById("txtIdLargo").value);

    cantCal = 3;
    cantCemento = 2;

    perimetro = ancho + largo;

    cantCal = perimetro * cantCal;
    cantCemento = perimetro * cantCemento;

    alert ("Para este terreno se necesitan " + cantCal + " bolsas de cal y " + cantCemento)    

	//para sacar el area de un rectangulo es base + altura, da en m2
}