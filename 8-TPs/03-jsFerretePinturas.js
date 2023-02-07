/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
    let celcius;

    fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    celcius = (fahrenheit - 32) * 5/9; 

    console.log(fahrenheit + "°F equivalen a " + celcius +"°C")
}

function CentigradosFahrenheit () 
{
    let fahrenheit;
    let celcius;

    celcius = parseFloat(document.getElementById("txtIdTemperatura").value);
    fahrenheit = (celcius * 9/5) + 32;

    console.log(celcius + "°C equivalen a " + fahrenheit +"°F");
	
}
