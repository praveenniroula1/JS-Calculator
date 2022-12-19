const buttons = document.querySelectorAll(".btn-area>div");
console.log(buttons);

const display = document.querySelector(".display");
console.log(display);

const buttonArray = Array.from(buttons);
console.log(buttonArray);

const screen = (str) => {
  display.innerText = str || 0.001;
};

buttonArray.forEach((eachButtons) => {
  eachButtons.addEventListener("click", () => {
    const value = eachButtons.innerText;

    displayValue.innerText = value;

    if (value === "AC") {
      displayValue = "";
      screen(displayValue);
      return;
    }

    displayValue += value;

    screen(displayValue);
  });
});
