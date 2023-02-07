function mostrar()
{
	
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if(edad >=13 && edad <= 17){
		alert("Sos adolescente");
	}
	else {
		alert ("No sos adolescente"); 
	}

}