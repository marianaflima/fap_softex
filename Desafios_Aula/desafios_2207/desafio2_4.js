let celsius, celsiusParaFahrenheit;

celsius = Number(prompt('Digite a temperatura (°C): '))
celsiusParaFahrenheit = ((celsius * 1.8) + 32).toFixed(1)

console.log(`${celsius}°C = ${celsiusParaFahrenheit}°F`)