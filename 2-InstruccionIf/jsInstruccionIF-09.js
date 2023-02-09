function mostrar()
{
	let numeroRandom;
	/* math floor redondea para abajo y math ceil para arriba. se tiene que poner +1 
	porque va de 0 a 9, para que incluya al 10, se le suma 1*/ 
	numeroRandom = Math.floor(Math.random()*10+1);
	console.log(numeroRandom);	

}