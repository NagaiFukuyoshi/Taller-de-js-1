document.getElementById('enunciado').innerHTML = "A través de un algoritmo ayude a un usuario de Megabus a saber cuántos pasajes tiene según el cupo de su tarjeta. Cada pasaje cuesta $1.700 pesos. Además es importante alertar al usuario cuando su cupo se encuentre con menos de 2 pasajes, se le informa que debe recargar su tarjeta.";

let num_pasajes, cupo, alerta;

const v_pasaje = 1700;

cupo = prompt("ingrese el valor del cupo de su tarjeta");

num_pasajes = cupo / v_pasaje;

document.getElementById('resultado').innerHTML = " la cantidad de pasajes que tiene disponibles es " + num_pasajes;

if(num_pasajes <= 2){
    alerta = "usted tiene 2 o menos pasajes disponibles, por favor recargar"
} else{
    alerta = "usted tiene " + num_pasajes + " pasajes disponibles"
}

alert(alerta);