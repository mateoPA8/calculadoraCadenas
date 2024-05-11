//import sumar from "./sumador";
import sumarElementosCadena from "./sumarElementosCadena";
const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;


  let delimitador = firstNumber.match(/(?<=\[).(?=\])/)[0];
  console.log(delimitador);
  
  // Escapar caracteres especiales en la expresión regular
  let expresionRegular = new RegExp(`[${delimitador}\\s]*`, 'g');
  
  let cadenaLimpia = firstNumber.replace(/[\[\]\s]/g, '');
  console.log(cadenaLimpia);
  
  let array = cadenaLimpia.split(expresionRegular).map(Number).filter(Boolean);
  console.log(array[0]);
  let resultado=sumarElementosCadena(array);
  div.innerHTML = "<p>" + resultado + "</p>";
 // div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
