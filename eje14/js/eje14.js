document.getElementById('enunciado').innerHTML = "Determinar el nivel de un empleado según las siguientes condiciones: <br> A. Nivel 1 si el sueldo es menor a 500 y lleva menos de 4 años en la empresa <br> B. Nivel 2 si el sueldo esta entre 501 y 1000 lleva menos de 4 años en la empresa <br> C. Nivel 3 no importa el sueldo, solo que lleve mas de 10 años en la empresa <br> D. Nivel 4 para los que lleven entre 5 y 9 años en la empresa y ganen menos de 2000. <br> E. Los demás están en el nivel 0.";

let sueldo = parseFloat(prompt("Ingrese el valor de su sueldo"));
let tiempo = parseFloat(prompt("Ingreso cuanto tiempo en años lleva laborando en la empresa"));

document.getElementById('resultado').innerHTML = "El empleado gana un sueldo de: " + sueldo + " y  lleva " + tiempo +" años trabajando en la empresa.";

if(sueldo <= 500 && tiempo <= 4){
    document.write("El empleado se encuentra en el nivel 1")
} else if(sueldo >=501 && sueldo <= 1000 && tiempo <= 4){
    document.write("El empleado se encuentra en el nivel 2")
}else if(tiempo >= 10){
    document.write("El empleado se encuentra en el nivel 3")
}else if(sueldo <= 2000 && tiempo >= 5 && tiempo <= 9){
    document.write("El empleado se encuentra en el nivel 4")
}else{
    document.write("El empleado se encuentra en el nivel 0")
}
