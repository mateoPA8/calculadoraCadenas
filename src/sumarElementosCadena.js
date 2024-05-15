function sumarElementosCadena(cadenaNumeros) 
{
    let delimitador = ',';
    let expresionRegular = /[,\s:;-]+/;
    let cadenaSinDelimitador=sacarDelimitadorDeLaCadena(cadenaNumeros,delimitador);
    let array = convertirCadenaComoNumerosEnUnArray(cadenaSinDelimitador,expresionRegular);
    let resultado = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] < 1000) 
        {
            resultado += array[i];
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


