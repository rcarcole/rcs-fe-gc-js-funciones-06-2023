// Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.


let numero = parseInt(prompt("Ingresa un número entero y positovo:"));
let contador = 0;


const cifrasNumero = (numero) => {
    if (numero < 0) {
        return 'Error: El número debe ser positivo.';
      }
      while (numero > 0) {
        numero = Math.floor(numero / 10);
        contador++;
      }
      return contador;
}

let cifras = cifrasNumero(numero);
console.log(`El número de cifras en ${numero} es: ${cifras}`);