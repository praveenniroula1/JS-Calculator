const buttons = document.querySelectorAll(".btn-area>div");

const display = document.querySelector(".display");

const buttonArray = Array.from(buttons);

const screen = (str) => {
  display.innerText = str || "0.00";
};

let displayOnScreen = "";

let operators = ["+", "-", "/", "*"];

buttonArray.forEach((eachbtns) => {
  eachbtns.addEventListener("click", () => {
    const value = eachbtns.innerText;
    displayOnScreen.innerText = value;

    if (value === "AC") {
      displayOnScreen = "";
      screen(displayOnScreen);
      return;
    }

    if (value === "C") {
      displayOnScreen = displayOnScreen.slice(0, -1);
      screen(displayOnScreen);
      return;
    }

    if (value === "=") {
      total();

      return;
    }

    displayOnScreen += value;
    screen(displayOnScreen);
  });
});

const total = () => {
  const tl = eval(displayOnScreen);
  displayOnScreen = tl.toString();
  screen(tl);
};
