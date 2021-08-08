function sumas()
{
    var respuesta = true;
    var resultadoPromedio;
    var numero;
    var acumuladorSuma = 0;
    var totalSuma = 0;

    respuesta = confirm("Desea realizar sumas?");

    if(respuesta){
        while(respuesta){
            acumuladorSuma++;
            var numero = prompt("Ingrese solo el primer numero a sumar");
            numero = parseFloat(numero);
            while(isNaN(numero)){
                numero = prompt("Ingrese un numero valido");
                numero = parseFloat(numero);
            }
            
            totalSuma += numero;
            respuesta = confirm("Desea seguir ingresando numero?");
        } alert("La suma es: "+totalSuma);
        
        respuesta = confirm("Desea realizar el promedio de la suma?")
        if(respuesta){
            resultadoPromedio = totalSuma / acumuladorSuma;
            alert("El promedio de "+totalSuma+" entre "+acumuladorSuma+" es: "+resultadoPromedio);
        }
    }
}
function restas()
{
    var respuesta = true;
    var resultado;
    var fresultado = 0;

    respuesta = confirm("Desea realizar restas?");

    if(respuesta){
        var numero = prompt("Ingrese solo el numero a restar");
        numero = parseFloat(numero);
        while(isNaN(numero)){
            numero = promp("Ingrese un numero valido");
            numero = parseFloat(numero);
        }

        var numeroresta = prompt("Cuanto desea restar?");
        numeroresta = parseFloat(numeroresta);
        while(isNaN(numeroresta)){
            numeroresta = prompt("Ingrese un numero valido");
            numeroresta = parseFloat(numeroresta);
        }
        
        resultado = numero - numeroresta;
        fresultado += resultado;
        alert("La resta es: "+resultado);
            
        respuesta = confirm("Desea restarle otro numero a "+resultado+"?");
        while(respuesta){
            var numero = prompt("Ingrese otro numero");
            numero = parseFloat(numero);
            
            fresultado -= numero;

            respuesta = confirm("Desea seguir restando?");
        }alert("La resta es: "+fresultado);
    }
}
function multip()
{
    var respuesta = true;
    var resultado;
    var totalMult = 0;
    
    respuesta = confirm("Desea realizar multiplicaciones?");
    if(respuesta){
        var numero = prompt("Ingrese solo un numero a multiplicar");
        numero = parseFloat(numero);
        while(isNaN(numero)){
            numero = prompt("Ingrese un numero valido");
            numero = parseFloat(numero);
        }

        var numeromult = prompt("Ingrese el segundo numero");
        numeromult = parseFloat(numeromult);
        while(isNaN(numeromult)){
            numeromult = prompt("Ingrese un numero valido");
            numeromult = parseFloat(numeromult);
        }

        resultado = numero * numeromult;
        totalMult += resultado;

        respuesta = confirm("Desea seguir multiplicando?");
        while(respuesta){
            numero = prompt("Ingrese numero");
            numero = parseFloat(numero);
            while(isNaN(numero)){
                numero = prompt("Ingrese un numero valido");
                numero = parseFloat(numero);
            }
            totalMult *= numero;
            respuesta = confirm("Desea seguir ingresando numeros?");
        }
        alert("La multiplicación es: "+totalMult);
    }
}
function division()
{
    var respuesta = true;
    var numero;
    var divisor;
    var resultado;

    respuesta = confirm("Desea realizar divisiones?");
    if(respuesta){
        numero = prompt("Ingrese el dividendo");
        numero = parseFloat(numero);
        while(isNaN(numero)){
            numero = prompt("Ingrese un numero valido");
            numero = parseFloat(numero);
        }

        divisor = prompt("Ingrese el divisor");
        divisor = parseFloat(divisor);
        while(isNaN(divisor)){
            divisor = prompt("Ingrese un numero valido");
            divisor = parseFloat(divisor);
        }


        resultado = numero / divisor;

        if(resultado == "Infinity"){
            alert("Syntax error: el resultado no puede ser ")
        }

        alert (numero+" dividido "+divisor+" es: "+resultado);
    }
}