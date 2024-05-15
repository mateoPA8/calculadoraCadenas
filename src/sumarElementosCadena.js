function sumarElementosCadena(cadenaNumeros) 
{
    let delimitador = ',';
    let expresionRegular = /[,\s:;-]+/;
    let cadenaSinDelimitador=sacarDelimitadorDeLaCadena(cadenaNumeros,delimitador);
    console.log(cadenaNumeros);
    delimitador = delimitador.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    console.log(delimitador);
    cadenaSinDelimitador = cadenaSinDelimitador.replace(new RegExp(delimitador, 'g'), ',');
   console.log(cadenaNumeros);
    let array = cadenaSinDelimitador.split(expresionRegular).map(Number);
    console.log(array);
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
function sacarDelimitadorDeLaCadena(cadenaNumeros,delimitador)
{
    if (cadenaNumeros.startsWith("//")) 
        {
            let delimitadorInicio = cadenaNumeros[2];
            console.log(delimitadorInicio);
            if (delimitadorInicio)
            {
                delimitador = delimitadorInicio;
                cadenaNumeros = cadenaNumeros.substring(4);
                console.log(cadenaNumeros);
            }
        }
        return cadenaNumeros;
}
export default sumarElementosCadena;


