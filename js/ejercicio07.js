// . Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

let euros = parseFloat(prompt("Ingresa la cantidad de euros a convertir:"));
let cambioMoneda = prompt("Ingresa la moneda a la que deseas convertir (dolares, yenes, libras):");

const convertirMoneda = (euros, cambioMoneda) => {
  let mensaje = "";

  switch (cambioMoneda) {
    case "dolares":
      let dolares = euros * 1.28611;
      mensaje = `${euros} euro/s son ${dolares} dólares.`;
      break;
    case "yenes":
      let yenes = euros * 129.852;
      mensaje = `${euros} euro/s son ${yenes} yenes.`;
      break;
    case "libras":
      let libras = euros * 0.86;
      mensaje = `${euros} euro/s son ${libras} libras.`;
      break;
    default:
      mensaje = "Moneda de destino no válida.";
  }

  console.log(mensaje);
};

convertirMoneda(euros, cambioMoneda);
