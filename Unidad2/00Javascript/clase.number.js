// Tipos de datos numéricos
const entero = 42;
const decimal = 3.14;

console.log(typeof entero, typeof decimal);

// Operaciones aritméticas
const suma = 3 + 5;
const resta = 10-3;
const multiplicacion = 4 * 7;
const division = 10 / 2;

// Mostrar en consola
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);

// Mostrar en la página HTML
document.getElementById("resultado").innerHTML = `
    <h2>Operaciones Numéricas</h2>
    <p><strong>Entero:</strong> ${entero}</p>
    <p><strong>Decimal:</strong> ${decimal}</p>
    <p><strong>Suma:</strong> ${suma}</p>
    <p><strong>Resta:</strong> ${resta}</p>
    <p><strong>Multiplicación:</strong> ${multiplicacion}</p>
    <p><strong>División:</strong> ${division}</p>
`;