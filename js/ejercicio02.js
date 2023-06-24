// Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
// qué números queremos que los genere, podemos pedirlas al usuario antes de generar
// los números. Este método devolverá un número entero aleatorio. Muestra estos
// números por consola.

const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generarNumerosAleatorios = () => {
  let cantidad = parseInt(prompt("Ingrese la cantidad de números a generar:"));
  let minimo = parseInt(prompt("Ingrese el número mínimo del rango:"));
  let maximo = parseInt(prompt("Ingrese el número máximo del rango:"));

  for (var i = 0; i < cantidad; i++) {
    let numero = generarNumeroAleatorio(minimo, maximo);
    console.log([i + 1] + "º número generado: " + numero);
  }
};

generarNumerosAleatorios();
