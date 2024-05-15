//import sumar from "./sumador.js";
import sumarElementosCadena from "./sumarElementosCadena";
describe("Sumar", () => {
  it("deberia devolver 0 si la cadena que se ingreso esta vacia", () => {
    expect(sumarElementosCadena("")).toEqual(0);
  });
  it("deberia devolver el mismo numero si solo se ingresa un numero en la cadena", () => {
    expect(sumarElementosCadena("5")).toEqual(5);
  });
  it("deberia devolver la suma de 2 numeros en caso de que la cadena tenga 2 numeros ingresados", () => {
    expect(sumarElementosCadena("5,5")).toEqual(10);
  });
  it("deberia devolver la suma de los numeros sin importar el delimitador", () => {
    expect(sumarElementosCadena("5,5,5-5")).toEqual(20);
  });
  
});
