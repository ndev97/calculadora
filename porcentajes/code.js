function masporcentaje()
{
    var resultado;
    var numero;
    var porcentaje
    var respuesta = true;
    var total;

    respuesta = confirm("Desea sumar un porcentaje?");
    if(respuesta){
        numero = prompt("Ingrese el número inicial");
        numero = parseFloat(numero);
        while(isNaN(numero)){
            numero = prompt("Ingrese un numero valido");
            numero = parseFloat(numero);
            
        }

        porcentaje = prompt("Ingrese el porcentaje a sumar");
        porcentaje = parseFloat(porcentaje);
        while(isNaN(porcentaje)){
            porcentaje = prompt("Ingrese solo numeros");
            porcentaje = parseFloat(porcentaje);
        }

        resultado = (numero * porcentaje) / 100;
        total = numero + resultado;
        alert("La suma del "+porcentaje+"% a "+numero+" es: "+total);
    }
}
function descuento()
{
    var numero;
    var respuesta= true;
    var resultado;
    var total;

    respuesta = confirm("Desea realizar un descuento?");
    if(respuesta){
        numero = prompt("Ingrese el numero inicial");
        numero = parseFloat(numero);
        while(isNaN(numero)){
            numero = prompt("Ingrese un numero valido");
            numero = parseFloat(numero);
        }

        var descuento = prompt("Ingrese el porcentaje que quiere descontar");
        descuento = parseFloat(descuento);
        while(isNaN(descuento)){
            descuento = prompt("Ingrese solo el numero");
            descuento = parseFloat(descuento);
        }

        resultado = (numero * descuento) / 100;
        total = numero - resultado;

        alert(numero+" con un descuento del "+descuento+"%, es: "+total)

    }
}
function diferencia()
{
    respuesta=confirm("Desea calcular el porcentaje de una cantidad con respecto a otra?");
    if(respuesta) {
        var fraccion;
        var resultadoFinal;
        var numero = prompt("Ingrese el número de la cantidad absoluta:");
        numero = parseFloat(numero);
        while(isNaN(numero)) {
            numero = prompt("Ingrese solo el numero");
            numero = parseFloat(numero);
        }

        fraccion = prompt("Ingrese la fracción a calcular de la cantidad absoluta");
        fraccion = parseFloat(fraccion);
        while(isNaN(fraccion)) {
            fraccion = prompt("Ingrese solo el numero");
            fraccion = parseFloat(fraccion);
        }

        resultadoFinal = (fraccion/numero) * 100;

        var decimal = resultadoFinal.toFixed(2);
        alert("El porcentaje que representa " +fraccion+ " sobre "+numero+" es del: "+decimal+"%");
    }
}
function soloporcentaje()
{
    var numero;
    var porcentaje;
    var respuesta = true;
    var resultado;
    var decimal;

    respuesta = confirm("Desea averiguar el porcentaje de un número?");
    if(respuesta){
        numero = prompt("Ingrese el numero inicial");
        numero = parseFloat(numero);
        while(isNaN(numero)){
            numero = prompt("Ingrese un numero valido");
            numero = parseFloat(numero);
        }

        porcentaje = prompt("Ingrese el porcentaje");
        porcentaje = parseFloat(porcentaje);
        while(isNaN(porcentaje)){
            porcentaje = prompt("Ingrese solo numeros");
            porcentaje = parseFloat(porcentaje);
        }

        resultado = (numero * porcentaje) / 100;
        alert("El "+porcentaje+"% de "+numero+" es: "+resultado);
    }
}