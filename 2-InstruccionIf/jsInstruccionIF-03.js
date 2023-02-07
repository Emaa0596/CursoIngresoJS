function mostrar()
{
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("Sos mayor de edad");
	}
	else {
		alert ("Sos menor de edad"); 
	}

}