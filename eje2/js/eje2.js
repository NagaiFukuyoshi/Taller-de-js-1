document.getElementById('enunciado').innerHTML = "Haga el algoritmo que, dada una variable cuyo valor es leído desde el teclado, imprima por pantalla si el número es o no mayor que 0 (cero).";

let numero;

numero = parseInt(prompt("ingrese un numero"));

document.getElementById('resultado').innerHTML = " El numero que escribiste es " + numero;

if(numero > 0){
    document.write("El numero es mayor a 0")
} else{
    document.write("el numero es menor a 0")
}