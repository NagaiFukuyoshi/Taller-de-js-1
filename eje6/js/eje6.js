document.getElementById('enunciado').innerHTML = "Diseñe un algoritmo que calcule la nota final de un estudiante con los siguientes porcentajes: primer parcial 30%, segundo parcial 30% y examen final 40%. Al final determine si pudo aprobar o no la asignatura. La nota mínima aprobatoria es 3.2 (Tres punto Dos).";

let parcial1 = parseInt(prompt("ingrese nota primer parcial"));
let parcial2 = parseInt(prompt("ingrese nota segundo parcial"));
let examen_final = parseInt(prompt("ingrese nota examen final"));
let prom_parcial1 = parcial1 * 0.3;
let prom_parcial2 = parcial2 * 0.3;
let prom_examen_final = examen_final * 0.4;
let nota_final = prom_parcial1 + prom_parcial2 + prom_examen_final;

document.getElementById('resultado').innerHTML = "Su nota final es: " + nota_final;

if(nota_final >= 3.2){
    document.write("Asignatura aprobada")
} else{
    document.write("asignatura no aprobada, debe recuperar!")
}