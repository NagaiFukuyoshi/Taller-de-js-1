document.getElementById('enunciado').innerHTML = "Escriba un algoritmo que intercambie el valor de dos variables numéricas sólo si el valor de la primera es mayor que el de la segunda.";

let var1 = parseInt(prompt("ingrese primera avriable numerica"));
let var2 = parseInt(prompt("ingrese segunda variable numerica"));

document.getElementById('resultado').innerHTML = "Las variables numericas ingresadas fueron " + var1 + " y " + var2 ;

if(var1 > var2){
    document.write("Las variables numericas ingresadas fueron " + var2 + " y " + var1)
}else{
    document.write("Las variables numericas ingresadas fueron " + var1 + " y " + var2)
}