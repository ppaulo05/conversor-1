const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const rankineInput = document.getElementById("rankine");

const ips = document.getElementsByClassName("input");

for(let i = 0; i < ips.length; i++) {
    let input = ips[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "celsius":
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                rankineInput.value = value + 491.67;
                break;
            case "fahrenheit":
                celsiusInput.value = (value - 32) / 1.8;
                kelvinInput.value =(value - 32) * 5/9 + 273.15;
                rankineInput.value = (value - 32) + 491.67;
                break;
            case "kelvin":
                celsiusInput.value = value - 273.15;
                fahrenheitInput.value = (value - 273.15) * 1.8 + 32;
                rankineInput.value = (value - 273.15) * 1.8 + 491.67;
                break;
            case "rankine":
                celsiusInput.value = value * 5/9 - 273.15;
                fahrenheitInput.value = value - 459.67;
                kelvinInput.value = value * 5/9;
                break
        }
    });
};