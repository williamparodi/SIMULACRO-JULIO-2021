/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temp;
	var tempMAx;
	var banderPrimer;
	var nombreTempMax;
	var contadorMujerSput;
	var contadorNoBAztra;
	var contadorNoBotra;
	var respuesta;
	var edadHombres;
	var cantidadHombresAztra;


	respuesta = true;
	contadorMujerSput = 0;
	contadorNoBAztra = 0;
	contadorNoBotra = 0;
	contadoPersonaTemp = 0;
	cantidadHombresAztra = 0;
	contadorPersonaTemp = 0;
	edadHombres = 0;
	banderPrimer = false;


	while(respuesta ==true)
	{


		nombre = prompt("ingrese Nombre");

		edad = prompt("ingrese edad");
		edad = parseInt(edad);
		while(isNaN(edad) || edad < 0)
		{
			edad = prompt("ingrese edad");
			edad = parseInt(edad);
		}

		genero = prompt("Ingrese genero : f- femenino M masculino o nB no binario");
		while(genero !="f" && genero != "m" && genero != "nb")
		{
			genero = prompt("Error;Ingrese genero : f- femenino M masculino o nB no binario");
		}
		vacuna = prompt("Ingrese vacuna S Sputnik A aztrazeneca u O otra");
		while(vacuna != "s" && vacuna !="a" && vacuna != "o")
		{
			vacuna = prompt("Error,Ingrese vacuna S Sputnik A aztrazeneca u O otra");
		}
		temp = prompt("Ingrese temperatura corporal durante la primera noche");
		temp = parseInt(temp);
		while(isNaN(temp)|| temp <35 || temp > 41)
		{
			temp = prompt("Ingrese temperatura corporal durante la primera noche");
			temp = parseInt(temp);
		} 
		switch(genero)
		{
			case "f":
				genero = "femenino";
				if(vacuna == "s")
				{
					contadorMujerSput = contadorMujerSput + 1;
				}
			break;
			case "m":
				genero = "masculino";
				if(vacuna =="s" && temp < 37)
				{
					edadHombres = edad;
					cantidadHombresAztra = cantidadHombresAztra + 1;
				}
			break;
			case "nb":
				genero = "no binario";
				if(vacuna == "a")
				{
					contadorNoBAztra = contadorNoBAztra + 1;
				}
				else
				{
					if(vacuna == "a")
					{
						contadorNoBotra = contadorNoBotra + 1;
					}
				}
			break;
			default:
			break;
		}
		if(temp > tempMAx || banderPrimer ==false)
		{
			tempMAx = temp;
			nombreTempMax = nombre;
			vacuaHombreMax = vacuna;
			banderPrimer = true;
		}
		if(vacuna == "a" && temp > 38)
		{
			contadorPersonaTemp = contadorPersonaTemp + 1; 
		}
		
		respuesta = confirm("desea continuar?");

	}
	promedioEdad = edadHombres / cantidadHombresAztra;

	document.write("El hombre con mayor temp se llama : "+nombreTempMax+ " y la vacuna que se dio es la : "+vacuaHombreMax);
	document.write("La cantidad de mujeres que se dieron la Sputnik es de : "+contadorMujerSput+ " <br>");
	document.write("la cantidad de genero no binario que recibieron la aztrazeneca es de :"+contadorNoBAztra+ " <br>");
	document.write("la cantidad de personas que dieron la aztrazeneca con mas de 38 es de "+contadorPersonaTemp+ " <br>")
	if(cantidadHombresAztra != 0)
	{
		promedioEdad = edadHombres / cantidadHombresAztra;
		document.write("el promeduio es edad es de hombres con aztrazeneca :"+promedioEdad+ "<br>");
	}
	else
	{
		document.write("no se pudo calcular");
	}



}	