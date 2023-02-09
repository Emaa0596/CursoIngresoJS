function mostrar()
{
	let notaRandom;

	notaRandom = Math.floor(Math.random()*10+1);

	if (notaRandom > 8)
	{
		alert("Excelente");
	}
	else {
		if (notaRandom >= 4)
		alert("Aprobo");
		else alert("Vamos, la proxima se puede");
	}
		
}