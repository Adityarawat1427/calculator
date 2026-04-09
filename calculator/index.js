   let display = document.getElementById("display");

    function append(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

function calculate() {
    try {
        if (display.value.trim() === "") return;
        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
}