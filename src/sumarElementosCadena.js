function sumarElementosCadena(cadenaNumeros) {
    let expresionRegular = /[,\s:;-]+/;
    let array = cadenaNumeros.split(expresionRegular).map(Number);
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    } 
    return resultado;
}

export default sumarElementosCadena;
