document.getElementById('enunciado').innerHTML = "Diseñe un algoritmo que, dada una variable cuyo valor es leído desde el teclado, imprima por pantalla si el número es o no mayor que 0 (cero), y si el número es par o impar.";

let numero;

numero = prompt("ingrese un numero");

document.getElementById('resultado').innerHTML = " El numero que escribiste es " + numero;

let residual = numero % 2;

/*switch(numero, residual){
    case numero > 0 && residual == 0:
        document.write("el numero " + numero + "es mayor a 0 y es par");
        break;
    case numero > 0 && residual != 0:
        document.write("el numero " + numero + "es mayor a 0 y es impar");
        break;
    case numero < 0 && residual == 0:
        document.write("el numero " + numero + "es menor a 0 y es par");
        break;
    case numero < 0 && residual != 0:
        document.write("el numero " + numero + "es menor a 0 y es impar");
        break;
}*/

if(numero > 0 && residual == 0){
    document.write("El numero " + numero + " es mayor a 0 y es par")
} else if(numero > 0 && residual != 0) {
    document.write("el numero " + numero + " es mayor a 0 y es impar")
} else if(numero < 0 && residual == 0) {
    document.write("el numero " + numero + " es menor a 0 y es par")
} else{
    document.write("el numero " + numero + " es menor a 0 y es impar")
}


