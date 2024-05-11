function sumarElementosCadena(cadenaNumeros) {
    let resultado = 0;
    let contieneLetras = false;

    for (let i = 0; i < cadenaNumeros.length; i++) {
        if (esLetra(cadenaNumeros[i])) {
            contieneLetras = true;
            break;
        } else {
            resultado = resultado+ cadenaNumeros[i];
        }
    }

    if (contieneLetras) {
        return "no se puede sumar letras";
    } else {
        return resultado;
    }
}

  

function esLetra(elemento) {
    return /^[a-zA-Z]$/.test(elemento);
}

export default sumarElementosCadena;