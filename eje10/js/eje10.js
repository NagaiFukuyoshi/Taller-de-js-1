document.getElementById('enunciado').innerHTML = "Dadas las notas parciales de 3 estudiantes, calcule la nota definitiva de cada uno de ellos y determine que estudiante obtuvo mejor rendimiento académico y cual obtuvo el mas bajo rendimiento académico.";

let est1_nota1 = parseFloat(prompt("Ingrese la primer nota del primer estudiante"));
let est1_nota2 = parseFloat(prompt("Ingrese la segunda nota del primer estudiante"));
let est1_nota3 = parseFloat(prompt("Ingrese la tercer nota del primer estudiante"));
let est2_nota1 = parseFloat(prompt("Ingrese la primer nota del segundo estudiante"));
let est2_nota2 = parseFloat(prompt("Ingrese la segunda nota del segundo estudiante"));
let est2_nota3 = parseFloat(prompt("Ingrese la tercer nota del segundo estudiante"));
let est3_nota1 = parseFloat(prompt("Ingrese la primer nota del tercer estudiante"));
let est3_nota2 = parseFloat(prompt("Ingrese la segunda nota del tercer estudiante"));
let est3_nota3 = parseFloat(prompt("Ingrese la tercer nota del tercer estudiante"));
let prom_est1 = (est1_nota1 + est1_nota2 + est1_nota3) / 3;
let prom_est2 = (est2_nota1 + est2_nota2 + est2_nota3) / 3;
let prom_est3 = (est3_nota1 + est3_nota2 + est3_nota3) / 3;

document.getElementById('resultado').innerHTML = "El promedio del primer estudiante es: " + prom_est1 + ". <br>" + "El promedio del segundo estudiante es: " + prom_est2 + ". <br>" + "El promedio del tercer estudiante es: " + prom_est3 + ". <br>";

/*mejor rendimiento academico*/
if(prom_est1 > prom_est2 && prom_est1 > prom_est3){
    document.write("el primer estudiante obtuve el mejor promedio academico con:" + prom_est1 + ". <br>")
} else if(prom_est2 > prom_est1 && prom_est2 > prom_est3){
    document.write("el segundo estudiante obtuve el mejor promedio academico con:" + prom_est2 + ". <br>")
} else{
    document.write("el tercer estudiante obtuve el mejor promedio academico con:" + prom_est3 + ". <br>")
}

/*menor rendiemiento academico*/
if(prom_est1 < prom_est2 && prom_est1 < prom_est3){
    document.write("el primer estudiante obtuve el menor promedio academico con:" + prom_est1 + ". <br>")
} else if(prom_est2 < prom_est1 && prom_est2 < prom_est3){
    document.write("el segundo estudiante obtuve el menor promedio academico con:" + prom_est2 + ". <br>")
} else{
    document.write("el tercer estudiante obtuve el menor promedio academico con:" + prom_est3 + ". <br>")
}