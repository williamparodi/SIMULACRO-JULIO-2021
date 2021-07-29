/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. (x)
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var capacidad;
	var contador;
	var contadorHdd;
	var banderaPrimerHdd;
	var banderaPrimerSdd;
	var precioMayor;
	var precioMinimo;
	var capacidadHdd;
	var cantidadHddMax;
	var cantidadSddMinimo;
	var marcaSddMinimo;

	banderaPrimerSdd = true;
	banderaPrimerHdd = false;
	contador = 0;
	cantidad = 0;
	contadorHdd = 0;
	cantidadHddMax = 0;
	cantidadSddMinimo = 0;

	while(contador < 6)
	{
		tipo = prompt("Ingrese tipo de disco rígido : H : hdd, S : SSD o M : SSDM2");

		while(tipo != "h" && tipo != "s" && tipo != "m")
		{
			tipo = prompt("Error;Ingrese tipo de disco rígido : H : hdd, S : SSD o M : SSDM2");
		}

		precio = prompt("Ingrese precio entre $5000 y $18000");
		precio = parseFloat(precio);

		while(isNaN(precio) || precio <5000 || precio > 18000)
		{
			precio = prompt("Error,Ingrese precio entre $5000 y $18000");
			precio = parseFloat(precio);
		}
		cantidad = prompt("ingrese Cantidad : Maximo 50 Unidades");
		cantidad = parseInt(cantidad);
		while(isNaN(cantidad)|| cantidad <0 || cantidad >50)
		{
			cantidad = prompt("ingrese Cantidad : Maximo 50 Unidades");
			cantidad = parseInt(cantidad);
		}
		
		marca = prompt("Ingrese Marca : A -Seagate B - Western Digital o C - Kingston");

		while(marca != "a" && marca !="b" && marca != "c")
		{
			marca = prompt("Error;Ingrese Marca : A -Seagate B - Western Digital o C - Kingston");
		}

		capacidad = prompt("Ingrese capacidad : 1 - 250gb, 2- 500gb, 3 - 1tb 3 - o 4- 2tb")
		

		while(capacidad != "1" && capacidad != "2" && capacidad != "3" && capacidad != "4")
		{
			capacidad = prompt("Error,Ingrese capacidad : 1 - 250gb, 2- 500gb, 3 - 1tb 3 - 2tb");
		}
		switch(marca)
		{
			case "a":
				marca = "Seagate";
			break;
			case "b":
				marca = "Western Digital";
			break;
			case "c":
				marca = "Kingston";
			break;
			default:
			break;
		}
		switch(capacidad)
		{
			case "1" :
				capacidad = "250gb";
			break;
			case "2":
				capacidad = "500 gb";
			break;
			case "3":
				capacidad = "1tb";
			break;
			case "4":
				capacidad  = "2tb";
			break;
			default:
			break;
		}  

		switch(tipo)
		{
			case "h":
				tipo = "hdd";
				contadorHdd = contadorHdd + 1;
				if(precio > precioMayor ||banderaPrimerHdd == false)
				{
					precioMayor = precio;
					capacidadHdd = capacidad;
					cantidadHddMax = cantidadHddMax + cantidad;
					banderaPrimerHdd = true;
				}
			break;
			case "s":
				tipo = "ssd";
				if(precio < precioMinimo || banderaPrimerSdd ==true)
				{
					precioMinimo = precio;
					cantidadSddMinimo =cantidadSddMinimo + cantidad;
					marcaSddMinimo = marca;
					banderaPrimerSdd = false;
				}
			break;
			case "m":
				tipo = "ssdm2";
			break;
			default:
			break;

		}

		contador = contador + 1;
	}


	document.write("El mas barato de los Sdd es : "+marcaSddMinimo+ " con " +cantidadSddMinimo+ " <br>");
	document.write("El Hdd con el precio mas caro es : " +precioMayor+ " la capacidad es de " +capacidadHdd+ " y la cantidad es de :"+cantidadHddMax+ " <br<");
	document.write("La cantidad de hdd es de :"+contadorHdd+ " <br>");

}

