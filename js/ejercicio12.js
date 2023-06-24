// Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
// aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// nosotros le indiquemos por prompt (debes controlar que se introduce un número
// correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
// posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

let tamanyo = parseInt(prompt("Introduce el tamaño del array:"));
let digito = parseInt(prompt("Introduce el dígito para filtrar los números:"));

let generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let array = [];
for (let i = 0; i < tamanyo; i++) {
  array.push(generarNumeroAleatorio(1, 300));
}

let numerosFiltrados = array.filter(num => num % 10 === digito);

console.log("Números filtrados: " +numerosFiltrados);