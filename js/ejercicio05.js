// Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el número convertido a binario. Para convertir un número decimal a binario,
// debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
// nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
// formará el número binario, de abajo a arriba.


let numero = prompt("Ingresa un numero en base decimal y lo transformo a binario:");

const converter = (numero) => {
    let binario = "";
    while (numero > 0) {
        let resto = numero % 2;
        binario += resto;
        numero = Math.floor(numero / 2);
      }
      return binario;
}

let binario = converter(numero);

console.log(`El número ${numero} en binario es: ${binario}`);