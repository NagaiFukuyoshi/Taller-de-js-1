document.getElementById('enunciado').innerHTML = "Solicitar tres números al usuario e intercambiarlos entre si, solo si el segundo es mayor que el primero y el tercero.";

let num1 = parseFloat(prompt("Ingrese el primer numero"));
let num2 = parseFloat(prompt("Ingrese el segundo numero"));
let num3 = parseFloat(prompt("Ingrese el tercer numero"));

document.getElementById('resultado').innerHTML = "Los numeros ingresados fueron: " + num1 + " - " + num2 + " - " + num3 + ".";

if(num2 > num1 && num2 > num3){
    document.write("Los numeros ingresados fueron: " + num3 + " - " + num1 + " - " + num2 + ".")
} else {
    document.write("Los numeros ingresados fueron: " + num1 + " - " + num2 + " - " + num3 + ".")
}