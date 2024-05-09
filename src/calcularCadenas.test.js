//import sumar from "./sumador.js";
import sumarElementosCadena from "./sumarElementosCadena";
describe("Sumar", () => {
  it("deberia devolver 0 si la cadena que se ingreso esta vacia", () => {
    expect(sumarElementosCadena("")).toEqual(0);
  });
});
