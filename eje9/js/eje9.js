document.getElementById('enunciado').innerHTML = "Diseñe un algoritmo que dada una nota (numérica) determine el estado de un estudiante según la siguiente tabla: EXCELENTE: 5.0, BUENO: entre 4.0 y 4.9, REGULAR: entre 3.0 y 3.9 y DEFICIENTE: entre 0 y 2.9.";

let nota =parseFloat(prompt("Ingrese su nota"))
const excelente = nota >= 5;
const bueno = nota >= 4.0 && nota <= 4.9;
const regular = nota >= 3.0 && nota <= 3.9;

document.getElementById('resultado').innerHTML = "la nota ingresada fue: " + nota;

/*switch(nota) {
    case excelente:
        document.write("su nota es excelente!")
        break;
    case bueno:
        document.write("su nota es bueno!")
        break;
    case re:
        document.write("su nota es regular!")
        break;
    default:
        document.write("su nota es deficiente!")
        break;
}*/

if(excelente){
    document.write("su nota es excelente!")
} else if(bueno){
    document.write("su nota es bueno!")
} else if(regular){
    document.write("su nota es regular!")
} else{
    document.write("su nota es deficiente!")
}
    
