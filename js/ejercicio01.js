// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
// los valores necesarios para calcular el área. Para ello has de crear un método por cada
// figura para calcular cada área, este devolverá un número real. Muestra el resultado por
// consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let figura = prompt("Introduce la figura de la que quieres calcular el area (circulo, triangulo o cuadrado)");

const areaCirculo = (radio) => {
    return (radio * radio) * Math.PI;
}

const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

const areaCuadrado = (lado) => {
    return lado * lado;
}

const calcularArea = (figura) => {
    let area = 0;
    switch (figura) {
        case "circulo":
            let radio = prompt("Introduce el radio del circulo");
            area = areaCirculo(radio);
            break;
        case "triangulo":
            let base = prompt("Introduce la base del triangulo");
            let altura = prompt("Introduce la altura del triangulo");
            area = areaTriangulo(base, altura);
            break;
        case "cuadrado":
            let lado = prompt("Introduce el lado del cuadrado");
            area = areaCuadrado(lado);
            break;
        default:
            console.log("No has introducido una figura correcta");
            break;
    }
    return area;
}

console.log('El area del ' +figura+ ' es: ' +calcularArea(figura));