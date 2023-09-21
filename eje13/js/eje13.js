document.getElementById('enunciado').innerHTML = "Para lograr ser monitor de la Universidad en las salas de sistemas, los estudiantes deben obtener un promedio integral superior a 4.0 y no tener antecedentes disciplinarios. Ayúdele a un estudiante a saber si puede optar por ser monitor de la institución.";

let prom_integral = parseFloat(prompt("Ingrese su promedio integral"));
let Antecedente = prompt("tienes antecedentes disciplinarios, solo responder si o no")

document.getElementById('resultado').innerHTML = "El estudiante tiene un promedio integral de: " + prom_integral + " y " + Antecedente + " tiene antecedentes disciplinarios";

if(prom_integral >= 4 && Antecedente == "no"){
    document.write("El estudiante puede ser monitor en las salas de sistemas")
} else{
    document.write("El estudiante no puede ser monitor en las salas de sistemas")
}