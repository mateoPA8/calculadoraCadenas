function sumarElementosCadena(cadenaNumeros) {
    let expresionRegular = /[,\s:;-]+/;
    let delimitador = ',';
    if (cadenaNumeros.startsWith("//")) {
        let delimitadorInicio = cadenaNumeros[2];
        if (delimitadorInicio) {
            delimitador = delimitadorInicio;
            cadenaNumeros = cadenaNumeros.substring(4);
        }
    }
    delimitador = delimitador.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    cadenaNumeros = cadenaNumeros.replace(new RegExp(delimitador, 'g'), ',');
    let array = cadenaNumeros.split(expresionRegular).map(Number);
    let resultado = 0;
    for (let i = 0; i < array.length; i++)
         {
        if (array[i] < 1000) {
            resultado += array[i];
        }
    }
    return resultado;
}

export default sumarElementosCadena;


