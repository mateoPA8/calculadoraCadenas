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
});
