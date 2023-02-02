// Emanuel Diaz
/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

// var es global, NO SE USA
var nombre1

function mostrar()
{
	let nombreCompleto
	let apellidoPersona;
	let nombrePersona; 
	nombrePersona = prompt ("¿Cual es tu nombre?"); //pido con prompt el nombre al usuario
	apellidoPersona = prompt ("¿Cual es tu apellido?")
	nombreCompleto = nombrePersona + " " + apellidoPersona
	
	alert ("tu nombre completo es: " + nombreCompleto);
	
}

