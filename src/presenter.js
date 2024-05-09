//import sumar from "./sumador";
import sumarElementosCadena from "./sumarElementosCadena";
const first = document.querySelector("#primer-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;
  console.log(firstNumber);
  div.innerHTML = "<p>" + sumarElementosCadena(firstNumber) + "</p>";
 // div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
