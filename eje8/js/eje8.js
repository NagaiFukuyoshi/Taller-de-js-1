document.getElementById('enunciado').innerHTML = "Escribir algoritmos que calculen y saquen por pantalla: <br> A. El máximo de tres números introducidos por teclado; <br> B. El mínimo de tres números dados por el usuarios <br> C. El promedio de tres números dados por el usuario Diseñe algoritmos que permitan <br> D. Determinar si una letra pulsada por el usuario es mayúscula o minúscula. <br> E. Indique si un carácter es un digito numérico.";

let num1 = parseFloat(prompt("Ingrese el primer numero"));
let num2 = parseFloat(prompt("Ingrese el segundo numero"));
let num3 = parseFloat(prompt("Ingrese el tercer numero"));
let prom = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;

document.getElementById('resultado').innerHTML = "los numeros ingresados fueron los siguientes: " + num1 + " - " + num2 + " - " + num3;

/*valor maximo*/
if(num1 > num2 && num1 > num3){
    document.write("el numero mayor es: " + num1 + ". <br>")
} else if(num2 > num1 && num2 > num3){
    document.write("el numero mayor es: " + num2 + ". <br>")
} else{
    document.write("el numero mayor es: " + num3 + ". <br>")
}

/*valor minimo*/
if(num1 < num2 && num1 < num3){
    document.write("el numero menor es: " + num1 + ". <br>")
} else if(num2 < num1 && num2 < num3){
    document.write("el numero menor es: " + num2 + ". <br>")
} else{
    document.write("el numero menor es: " + num3 + ". <br>")
}

/*promedio*/
document.write("el promedio es: " + prom + ".");

