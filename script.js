document.addEventListener("DOMContentLoaded", () => {
  const portableBox = document.querySelector(".box");

  const arrowUp = document.getElementById("arrowUp");
  const arrowDown = document.getElementById("arrowDown");
  const arrowLeft = document.getElementById("arrowLeft");
  const arrowRight = document.getElementById("arrowRight");

  let x = 0;
  let y = 0;
  let speed = 100;

  function updateBoxPosition() {
    portableBox.setAttribute(
      "style",
      `--x: ${x * speed}px; --y: ${y * speed}px`
    );
    console.log(`x: ${x}`, `y: ${y}`);
  }

  function handleMovement(key) {
    // Tip: web browsers use a different coordinate system for positioning elements on a page
    switch (key) {
      case "ArrowUp":
        y = y - 1;
        break;
      case "ArrowDown":
        y = y + 1;
        break;
      case "ArrowLeft":
        x = x - 1;
        break;
      case "ArrowRight":
        x = x + 1;
        break;
      default:
        console.log("That is not a valid move");
        break;
    }
    updateBoxPosition();
  }

  function handleKeyDown(event) {
    if (event.key.includes("Arrow")) {
      handleMovement(event.key);
      console.log(event.key);
    } else {
      console.log("That is not a valid move");
    }
  }
  // Tip: line works correctly because you are passing handleKeyDown as a function reference
  window.addEventListener("keydown", handleKeyDown);

  // Problem: The handleMovement("ArrowUp") function executes immediately when the addEventListener line is processed (i.e., as soon as the script runs, not when the button is clicked). The handleMovement function, after doing its work, returns undefined (because it doesn't explicitly return anything).
  // Fix: function that it can execute later when the event actually happens; 1. Using an Anonymous Arrow Function 2. bind
  arrowUp.addEventListener("click", () => handleMovement("ArrowUp"));
  arrowDown.addEventListener("click", () => handleMovement("ArrowDown"));
  arrowLeft.addEventListener("click", () => handleMovement("ArrowLeft"));
  arrowRight.addEventListener("click", () => handleMovement("ArrowRight"));
});
