

input = document.getElementById("input");
var makeConversion = function() {    
    userInput = input.value;
    document.getElementById("meters").textContent = userInput + " meter(s) = " + (userInput * 3.28084).toFixed(3) + " feet";

    document.getElementById("feet").textContent = userInput + " feet = " + (userInput * 0.3048).toFixed(3) + " meter(s)";
    
    document.getElementById("lts").textContent = userInput + " liter(s) = " + (userInput * 0.264172).toFixed(3) + " gallon(s)";
    
    document.getElementById("gallons").textContent = userInput + " gallon(s) = " + (userInput * 3.78541).toFixed(3) + " liter(s)";
    
    document.getElementById("kg").textContent = userInput + " kilos = " + (userInput * 2.20462).toFixed(3) + " pounds";
    
    document.getElementById("pounds").textContent = userInput + " pound(s) = " + (userInput * 0.453592).toFixed(3) + " kilo(s)";
    
    document.getElementById("ms").textContent = userInput + " m/s = " + (userInput * 3.6).toFixed(3) + " km/h";
    
    document.getElementById("kmh").textContent = userInput + " km/h = " + (userInput * 0.278).toFixed(3) + " m/s";
}

 // this is to add an event listener for the input, instead of using the save button
input.addEventListener('change', makeConversion);
input.addEventListener('keyup', makeConversion);
// function save() {
    
//     userInput = document.getElementById("input").value;
//     document.getElementById("meters").textContent = userInput + " meters = " + (userInput * 3.38084).toFixed(3) + " feet";

//     document.getElementById("feet").textContent = userInput + " feet = " + (userInput * 0.3048).toFixed(3) + " meters";
    
//     document.getElementById("lts").textContent = userInput + " liters = " + (userInput * 0.264172).toFixed(3) + " gallons";
    
//     document.getElementById("gallons").textContent = userInput + " gallons = " + (userInput * 3.78541).toFixed(3) + " liters";
    
//     document.getElementById("kg").textContent = userInput + " kilos = " + (userInput * 2.20462).toFixed(3) + " pounds";
    
//     document.getElementById("pounds").textContent = userInput + " pounds = " + (userInput * 0.453592).toFixed(3) + " kilos";
    
//     document.getElementById("ms").textContent = userInput + " m/s = " + (userInput * 3.6).toFixed(3) + " km/h";
    
//     document.getElementById("kmh").textContent = userInput + " km/h = " + (userInput * 0.278).toFixed(3) + " m/s";
// }
