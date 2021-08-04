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
	var respuesta;
	var nombreMayorTemp;
	var vacunaMayorTemp;
	var tempMax;
	var banderaPrimerTemp;
    var contadorFemeninoSput;
    var contadorNbAztraOtra;
    var contadorHombreSinFiebre;
    var edadHombresSinFiebre;
    var personasVacunaAztraFiebre;
    var promedioEdadHombres;


	respuesta = true;
	contadorFemenino = 0;
	contadorFemeninoSput = 0;
	contadorNbAztraOtra = 0;
	contadorHombreSinFiebre = 0;
	edadHombresSinFiebre = 0;
	personasVacunaAztraFiebre = 0;
	banderaPrimerTemp = false;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese nombre");

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);

		while(isNaN(edad) || edad < 0 || edad > 150)
		{
			edad = prompt("Error;Ingrese edad");
			edad = parseInt(edad);
		}

		genero = prompt("Ingrese genero : “F”, “M”, “NB”");
		while(genero != "masculino" && genero != "femenino" && genero != "no binario")
		{
			genero = prompt("Error;Ingrese genero :“F”, “M”, “NB”");
		}

		vacuna = prompt("ingrese vacuna : “SputnikV”, “AstraZeneca”, “Otra”.");
		while(vacuna !="sputnik"&&vacuna!="aztrazeneca"&& vacuna != "otra")
		{
			vacuna = prompt("Error;ingrese vacuna : “SputnikV”, “AstraZeneca”, “Otra”.");
		}

		temp = prompt("Ingrese tempertura corporal :");
		temp = parseInt(temp);

		while(isNaN(temp) || temp <35 || temp > 41)
		{
			temp = prompt("Error;Ingrese tempertura corporal :");
			temp = parseInt(temp);
		}

		if(temp > tempMax || banderaPrimerTemp == false)
		{
			tempMax = temp;
			nombreMayorTemp = nombre;
			vacunaMayorTemp = vacuna;
			banderaPrimerTemp = true;
		}
		if(vacuna == "aztrazeneca" && temp >38)
		{
			personasVacunaAztraFiebre = personasVacunaAztraFiebre + 1;
		}

		switch(genero)
		{
			case "femenino":
				if(vacuna == "sputnik")
				{
					contadorFemeninoSput = contadorFemeninoSput +1;
				}
			break;
			case "no binario":
				if(vacuna == "aztrazeneca" || vacuna == "otra")
				{
					contadorNbAztraOtra = contadorNbAztraOtra + 1;
				}
			break;
			case "masculino":
				if(vacuna == "sputnik" && temp < 38)
				{
					contadorHombreSinFiebre = contadorHombreSinFiebre + 1;
					edadHombresSinFiebre = edadHombresSinFiebre + edad;
				}
			break;
			default:
			break;

		}



		respuesta = confirm("Desea continuar??");

	}

	document.write("El nombre de la persona con mayor tempertura es : "+nombreMayorTemp+ " <br>");

	if(contadorFemeninoSput != 0)
	{
		document.write(" la cantidad de mujeres con la vacuna sputnik es : "+contadorFemeninoSput+ " <br>");
	}
	if(contadorNbAztraOtra != 0)
	{
		document.write("La cantidad de genero no binario con la aztrazeneca u otra es : "+contadorNbAztraOtra+ " <br>");
	}
	if(personasVacunaAztraFiebre != 0)
	{
		document.write(" la cantidad de personas con aztrazeneca con fiebre es de "+personasVacunaAztraFiebre+ " <br>");
	}
	if(contadorHombreSinFiebre != 0)
	{
		promedioEdadHombres = edadHombresSinFiebre / contadorHombreSinFiebre;
		document.write("La edad promedio de hombres sin fiebre es de : "+promedioEdadHombres+ " <br>");
	}
	



















	/*
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
 */


}	