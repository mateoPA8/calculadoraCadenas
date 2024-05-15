function sumarElementosCadena(cadenaNumeros) 
{
    let delimitador = ',';
    let expresionRegular = /[,\s:;-]+/;
    let cadenaSinDelimitador=sacarDelimitadorDeLaCadena(cadenaNumeros,delimitador);
    let numerosParaSumar = convertirCadenaComoNumerosEnUnArray(cadenaSinDelimitador,expresionRegular);
    let resultado = 0;
    for (let posicion = 0; posicion < numerosParaSumar.length; posicion++)
    {
        if (numerosParaSumar[posicion] < 1000) 
        {
            resultado += numerosParaSumar[posicion];
        }
    }
    return resultado;
}
function convertirCadenaComoNumerosEnUnArray(cadenaSinDelimitador,expresionRegular)
{
    return cadenaSinDelimitador.split(expresionRegular).map(Number);
}
function sacarDelimitadorDeLaCadena(cadenaNumeros,delimitador)
{
    if (cadenaNumeros.startsWith("//")) 
        {
            let delimitadorInicio = cadenaNumeros[2];
            if (delimitadorInicio)
            {
                delimitador = delimitadorInicio;
                cadenaNumeros = cadenaNumeros.substring(4);
            }
        }
        return cadenaNumeros;
}
export default sumarElementosCadena;


