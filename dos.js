/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var tipo;
  var cantidad;
  var precioBolsa;
  var descuento;
  var precioDesc;
  var bolsasYerba;
  var bolsasAzucar;
  var bolsasCafe;
  var tipoMasbolsas;
  var tipoMasbarato;
  var respuesta;
  var precioBolsaYerba;
  var precioBolsaAzucar;
  var precioBolsaCafe;
  var totalPrecioYerba;
  var totalPrecioAzucar;
  var totalPrecioCafe;
  var precioTotal;
  var bolsasTotal;
  var precioMinimo;
  var banderPrimeMinimo;

  banderPrimeMinimo = true;
  respuesta = true;
  bolsasYerba = 0;
  bolsasAzucar = 0;
  bolsasCafe = 0;
  precioBolsaYerba = 0;
  precioBolsaAzucar = 0;
  precioBolsaCafe = 0;
  totalPrecioYerba = 0;
  totalPrecioAzucar = 0;
  totalPrecioCafe = 0;
  precioTotal = 0;
  bolsasTotal = 0;


  while(respuesta == true)
  {
    tipo = prompt("ingrese tipo de producto :  Yerba, Azúcar o  Café");

    while(tipo != "yerba"&& tipo!= "azucar" && tipo != "cafe")
    {
      tipo = prompt("Error,ingrese tipo de producto :  Yerba, Azúcar o  Café");
    }

    cantidad = prompt("ingrese Cantidad");
    cantidad = parseInt(cantidad);

    while(isNaN(cantidad) || cantidad < 1)
    {
      cantidad = prompt("Error,ingrese Cantidad");
      cantidad = parseInt(cantidad);
    }

    precioBolsa = prompt("Ingrese precio");
    precioBolsa = parseFloat(precioBolsa);

    while(isNaN(precioBolsa) || precioBolsa <1)
    {
      precioBolsa = prompt("Error;Ingrese precio");
      precioBolsa = parseFloat(precioBolsa);
    }
    switch(tipo)
    {
      case "yerba":
        bolsasYerba = bolsasYerba + cantidad;
        precioBolsaYerba = precioBolsa * bolsasYerba;
        totalPrecioYerba = precioBolsaYerba;
      break;
      case "azucar":
        bolsasAzucar = bolsasAzucar + cantidad;
        precioBolsaAzucar = precioBolsa * bolsasAzucar;
        totalPrecioAzucar = precioBolsaAzucar * bolsasAzucar;
      case "cafe":
        bolsasCafe = bolsasCafe + cantidad;
        precioBolsaCafe = precioBolsa * precioBolsaCafe;
        totalPrecioCafe = precioBolsaCafe * bolsasCafe;
      break;
    } 

    if(precioBolsa < precioMinimo ||banderPrimeMinimo == true)
    {
      precioMinimo = precioBolsa;
      tipoMasbarato = tipo;
      banderPrimeMinimo = false;
    }

    bolsasTotal = bolsasTotal + bolsasCafe + bolsasYerba + bolsasAzucar;
    precioTotal = precioBolsaCafe + precioBolsaYerba + precioBolsaAzucar;

    respuesta = confirm("desea continuar");
  }

  precioBruto = bolsasTotal * precioTotal;

  document.write("El precio bruto es de :"+ precioBruto+" <br>");

  if(bolsasTotal > 5 && bolsasTotal < 10)
  {
    descuento = 0.10;
  }
  else
  {
    if(bolsasTotal >10)
    {
      descuento = 0.15;
    }
    else
    {
      descuento = 0;
    }
  }
  if(descuento !=0)
  {
    descuento = precioBruto * descuento;
    precioDesc = precioBruto - descuento;
    document.write("El precio con descuento es de : "+precioDesc+ " <br>");
  }
  
  if(bolsasAzucar > bolsasCafe || bolsasAzucar > bolsasYerba)
  {
    document.write("La mayor cantidad de bolsas es de azucar <br> ");
  }
  else
  {
    if(bolsasCafe > bolsasAzucar || bolsasCafe > bolsasYerba)
    {
      document.write("La mayor cantidad de bolsas es de cafe <br>");
    }
    else
    {
      document.write("La mayor cantidad de bolsas es de yerba <br>");
    }
  }

  document.write("el tipo mas barato es "+tipoMasbarato+ " <br>");
}
