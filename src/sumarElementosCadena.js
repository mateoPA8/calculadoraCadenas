function sumarElementosCadena(cadenaNumeros)
{
    let resultado=0;
    if(cadenaNumeros.length==1)
    {
        return cadenaNumeros[0];
    }
    else
    {
        for(let i=0;i<cadenaNumeros.length;i++)
            {
                resultado=resultado+cadenaNumeros[i];
            }
            return resultado;
    }
   
    return 0;
    
}
export default sumarElementosCadena;