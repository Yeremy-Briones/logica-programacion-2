function convertirTemperatura() {
    let celsius;
    do {
        let input = prompt("Ingrese la temperatura en grados Celsius:");
        celsius = parseFloat(input);
        
        if (isNaN(celsius)) {
            alert("Error: Ingrese un número válido, por favor.");
        }
    } while (isNaN(celsius));

    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;

    console.log("Grados Kelvin: " + kelvin.toFixed(2));
    console.log("Grados Fahrenheit: " + fahrenheit.toFixed(2));

    document.body.innerHTML = "<p>Grados Kelvin: " + kelvin.toFixed(2) + "</p>";
    document.body.innerHTML += "<p>Grados Fahrenheit: " + fahrenheit.toFixed(2) + "</p>";
}

convertirTemperatura();
