
let number = Number(prompt("ingresa un numero menor que 1000"));

while (number > 1000) {
    alert("ingresaste un numero mayor que 1000")
    number = Number(prompt("ingresa un numero menor que 1000"));
}

if (number < 1000) {
    alert("tu numero se guardo correctamente")
    console.log(`Tu numero es ${number}`);
}