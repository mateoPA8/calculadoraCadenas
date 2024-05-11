//import sumar from "./sumador.js";
import sumarElementosCadena from "./sumarElementosCadena";
describe("Sumar", () => {
  it("deberia devolver 0 si la cadena que se ingreso esta vacia", () => {
    expect(sumarElementosCadena([])).toEqual(0);
  });
  it("deberia devolver el mismo numero si solo se ingresa un numero en la cadena", () => {
    let cadenaNumeros=[]
    cadenaNumeros.push(5);
    expect(sumarElementosCadena(cadenaNumeros)).toEqual(5);
  });
  it("deberia devolver la suma de 2 numeros en caso de que la cadena tenga 2 numeros ingresados", () => {
    let cadenaNumeros=[]
    cadenaNumeros.push(5);
    cadenaNumeros.push(5);
    expect(sumarElementosCadena(cadenaNumeros)).toEqual(10);
  });
  it("deberia devolver la suma de los numeros sin importar el delimitador", () => {
    let cadenaNumeros=[]
    cadenaNumeros.push(5);
    cadenaNumeros.push(5);
    cadenaNumeros.push(5);
    cadenaNumeros.push(5);
    expect(sumarElementosCadena(cadenaNumeros)).toEqual(20);
  });
  it("deberia de no tomar en cuenta que no se haga nada en caso de que existan letras en el array", () => {
    let cadenaNumeros=[]
    cadenaNumeros.push(5);
    cadenaNumeros.push(5);
    cadenaNumeros.push('a');
    console.log(cadenaNumeros);
    expect(sumarElementosCadena(cadenaNumeros)).toEqual("no se puede sumar letras");
  });
});
