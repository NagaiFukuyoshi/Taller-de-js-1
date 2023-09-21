document.getElementById('enunciado').innerHTML = "Escribir un algoritmo que determine el equipo en el que será asignado un jugador. Se tiene como datos: nombre, cédula y edad. Y se clasifica en cada equipo así: Profesionales para jugadores entre 25 y 40 años, aficionados entre 18 y 24 años, Novatos entre 12 y 17 años. Otras edades no pueden ser asignados a ningún equipo.";

let nombre = prompt("Ingrese su nombre completo");
let cedula = parseInt(prompt("Ingrese su cedula sin puntos ni comas"));
let edad = parseInt(prompt("ingrese su edad"));
const profesionales = edad >= 25 && edad <= 40;
const aficionados = edad >= 18 && edad <= 24;
const novatos = edad >= 12 && edad <= 17;

document.getElementById('resultado').innerHTML = "jugador: " + nombre + ". <br>" + "cedula: " + cedula + ". <br>" + "Edad: " + edad + ". <br>";

if(profesionales){
    document.write("El jugador " + nombre + " fue asignado al equipo de profesionales.")
} else if(aficionados){
    document.write("El jugador " + nombre + " fue asignado al equipo de aficionados.")
} else if(novatos){
    document.write("El jugador " + nombre + " fue asignado al equipo de novatos.")
} else{
    document.write("El jugador " + nombre + " no cumple con los requisitos para ser asignado a un equipo.")
}