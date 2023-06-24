// . Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// del segundo array con valores aleatorios. Después, crea un método que tenga como
// parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
// del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
// cada array.

let dimension = parseInt(prompt("Introduce la dimensión de los arrays:"));

let multiplicarArrays = (array1, array2) => {
  let resultado = [];
  for (let i = 0; i < array1.length; i++) {
    resultado.push(array1[i] * array2[i]);
  }
  return resultado;
};

let array1 = [];
for (let i = 0; i < dimension; i++) {
  array1.push(Math.floor(Math.random() * 100));
}

let array2 = array1.slice();

for (let i = 0; i < dimension; i++) {
  array2[i] = Math.floor(Math.random() * 100);
}

let resultado = multiplicarArrays(array1, array2);

console.log("Contenido del primer array:" + array1);
console.log("Contenido del segundo array:" + array2);
console.log("Resultado de la multiplicación:" + resultado);
