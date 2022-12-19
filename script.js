const buttons = document.querySelectorAll(".btn-area>div");
console.log(buttons);

const display = document.querySelector(".display");
console.log(display);

const buttonArray = Array.from(buttons);
console.log(buttonArray);

const screen = (str) => {
  display.innerText = str || "0.00";
};

let displayOnScreen = "";

buttonArray.forEach((eachbtns) => {
  eachbtns.addEventListener("click", () => {
    const value = eachbtns.innerText;
    displayOnScreen.innerText = value;

    if (value === "AC") {
      displayOnScreen = "";
      screen(displayOnScreen);
      return;
    }

    displayOnScreen += value;
    screen(displayOnScreen);
  });
});
