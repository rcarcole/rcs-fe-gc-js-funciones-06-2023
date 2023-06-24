// Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
// valores y otro para mostrar



let array = [];

const rellenarValores = () => {
  for (let i = 0; i < 10; i++) {
    let valor = prompt(`Ingresa el valor para la posición ${i}:`);
    array.push(valor);
  }
  return array;
};

const mostrarArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Índice ${i}: Valor: ${array[i]}`);
  }
};

mostrarArray(rellenarValores());
