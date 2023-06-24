// Crea un array de números de un tamaño pasado por prompt, el array contendrá números
// aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
// de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.


let array = [];

const esPrimo = (numero) => {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

const generarNumeroPrimo = (min, max) => {
    let numeroPrimo = Math.floor(Math.random() * (max - min + 1)) + min;
    while (!esPrimo(numeroPrimo)) {
      numeroPrimo = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return numeroPrimo;
  };
  

const crearArrayNumerosPrimos = (tamanyo, min, max) => {
  while (array.length < tamanyo) {
    let numeroPrimo = generarNumeroPrimo(min, max);
    array.push(numeroPrimo);
  }
  return array;
};

const encontrarMayorNumero = (array) => {
  let mayorNumero = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayorNumero) {
      mayorNumero = array[i];
    }
  }

  return mayorNumero;
};

let numerosPrimosArray = crearArrayNumerosPrimos(prompt("Ingresa el tamaño del array:"), 2, 100);
console.log("Array de números primos:", numerosPrimosArray);
console.log("El mayor número es:", encontrarMayorNumero(numerosPrimosArray));
