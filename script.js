const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            currentInput = "";
        } else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = "Error";
            }
        } else if (value === "DE") {
            currentInput = currentInput.slice(0, -1);
        } else {
            if (currentInput === "" || currentInput === "Error") {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }

        display.textContent = currentInput;
    });
});