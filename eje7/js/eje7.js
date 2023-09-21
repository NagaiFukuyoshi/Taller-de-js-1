document.getElementById('enunciado').innerHTML = "Calcule e imprima el pago mensual para un vendedor de autos, basándose en lo siguiente: <br> A. El pago base es de $350, más una comisión de $15 por cada auto vendido y un bono de 40$ si vendió mas de 15 autos. <br> B. El impuesto a pagar es el 25% del pago total <br> C. Los datos de entrada son el nombre del vendedor y el número de autos vendidos en el mes <br> D. Se desea imprimir el nombre del vendedor, el sueldo bruto, el impuesto y el sueldo neto";

const pago_base = 350;
let nombre = prompt("ingrese el nombre del vendedor");
let num_autos_ven = parseFloat(prompt("ingrese numero de autos vendidos por el vendedor"));
let comision = 15 * num_autos_ven;
const bono = 40;
let sueldo_bruto;
const impuesto = sueldo_bruto * 0.25;
let sueldo_neto = sueldo_bruto - impuesto;
let sueldo_bruto_1 = parseFloat(pago_base) + parseFloat(comision) + parseFloat(bono);
let sueldo_bruto_2 = parseFloat(pago_base) + parseFloat(comision);
const impuesto1 = sueldo_bruto_1 * 0.25;
const impuesto2 = sueldo_bruto_2 * 0.25;
let sueldo_neto_1 = sueldo_bruto_1 - impuesto1;
let sueldo_neto_2 = sueldo_bruto_2 - impuesto2;

document.getElementById('resultado').innerHTML = "El vendedor: " + nombre + " vendio durante el mes " + num_autos_ven + " autos.";

/*if(num_autos_ven >= 15){
    sueldo_bruto = parseInt(pago_base) + parseInt(comision) + parseInt(bono);
} else{
    sueldo_bruto = parseInt(pago_base) + parseInt(comision);
}

let alerta = "el vendedor " + nombre + " tiene un sueldo bruto de: $" + sueldo_bruto + ", debe pagar un impuesto por: $" + impuesto + " y gano un sueldo neto por: $" + sueldo_neto;

alert(alerta);*/

if(num_autos_ven >= 15){
    document.write("vendedor: " + nombre + "."  + "el sueldo bruto es: " + sueldo_bruto_1 + ". " + "el impuesto a descontar es: " + impuesto1 + ". " +  "El sueldo neto es: " + sueldo_neto_1 + ". ")
} else{
    document.write("vendedor: " + nombre + "." + "el sueldo bruto es: " + sueldo_bruto_2 + ". " + "el impuesto a descontar es: " + impuesto2 + ". " + "El sueldo neto es: " + sueldo_neto_2 + ". " )
}