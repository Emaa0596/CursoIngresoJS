function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13 ||  edad > 17){ // || = esto o esto 
		alert("No sos adolescente");
	}
	

}