// Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola el
// valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un método
// para rellenar el array(que tenga como parámetros los números entre los que tenga que
// generar) y otro para mostrar el contenido y la suma del array.



let array = [];
let suma = 0;

const rellenarArrayAleatorio = (tamanyo, min, max) => {
  for (let i = 0; i < tamanyo; i++) {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(numeroAleatorio);
  }
  return array;
};

const mostrarArrayYSuma = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Valor en la posición ${i}: ${array[i]}`);
    suma += array[i];
  }
  console.log(`La suma de todos los valores es: ${suma}`);
};

mostrarArrayYSuma(rellenarArrayAleatorio(prompt("Ingresa el tamaño del array:"), 0, 9));