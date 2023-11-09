function convertTemperature() {
  // Get the input and output units from the dropdown menus.
  var inputUnit = document.getElementById("inputUnit").value;
  var outputUnit = document.getElementById("outputUnit").value;

  // Get the input temperature.
  var inputTemperature = document.getElementById("inputTemperature").value;

  // Convert the temperature to the output unit.
  var convertedTemperature;
  if (inputUnit === "celsius") {
    if (outputUnit === "fahrenheit") {
      convertedTemperature = (inputTemperature * 9 / 5) + 32;
    } else if (outputUnit === "kelvin") {
      convertedTemperature = inputTemperature + 273.15;
    }
  } else if (inputUnit === "fahrenheit") {
    if (outputUnit === "celsius") {
      convertedTemperature = (inputTemperature - 32) * 5 / 9;
    } else if (outputUnit === "kelvin") {
      convertedTemperature = (inputTemperature - 32) * 5 / 9 + 273.15;
    }
  } else if (inputUnit === "kelvin") {
    if (outputUnit === "celsius") {
      convertedTemperature = inputTemperature - 273.15;
    } else if (outputUnit === "fahrenheit") {
      convertedTemperature = (inputTemperature - 273.15) * 9 / 5 + 32;
    }
  }

  // Display the converted temperature in the output field.
  document.getElementById("outputTemperature").value = convertedTemperature;
}
