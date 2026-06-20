const numeroSecreto = Math.floor(Math.random()*10);
const numeroJugador = parseInt(prompt("Adivina el numero secreto entre el 1 al 10:"));

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto){
    console.log("FELICIDADES, GANASTE!!")
} else if (numeroJugador < numeroSecreto){
    console.log("tu numero es menor!!! intenta nuevamente")
} else {
    console.log("tu numero es mayor!!! intenta nuevamente")
}

const a = 10
const b = 20
const c = "30"

a == b
a === b
a === c
a == c