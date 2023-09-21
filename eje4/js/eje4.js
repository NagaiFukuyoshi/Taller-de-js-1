document.getElementById('enunciado').innerHTML = "Determine si un viajero de una Aerolínea puede tomar un tiquete determinado en clase: Ejecutiva, Normal o Económica. Dependiendo de los puntos que tenga puede tener acceso a cada clase. Más de 2000 puntos puede estar en Ejecutiva, entre 1000 y 1999 puede estar en Normal y menos de 1000 puede estar en Económica.";

let puntos = parseInt(prompt("ingrese la cantidad de puntos que tiene"));

const ejecutiva = puntos >= 2000;
const normal = puntos > 1000 && puntos < 1999;
const economica = puntos < 1000;

document.getElementById('resultado').innerHTML = "Usted tiene " + puntos + " puntos." ;

/*switch(puntos){
    case puntos >= 2000:
        document.write("Usted tiene " + puntos + " puntos, tiene acceso a la clase ejecutiva");
        break;
    case puntos > 1000 && puntos < 1999:
        document.write("Usted tiene " + puntos + " puntos, tiene acceso a la clase normal");
        break;
    default:
        document.write("Usted tiene " + puntos + " puntos, tiene acceso a la clase economica");
}*/

if(puntos >= 2000){
    document.write("Usted tiene " + puntos + " puntos, tiene acceso a la clase ejecutiva")
} else if(puntos > 1000 && puntos < 1999) {
    document.write("Usted tiene " + puntos + " puntos, tiene acceso a la clase normal")
} else{
    document.write("Usted tiene " + puntos + " puntos, tiene acceso a la clase economica")
}