const container = document.getElementById("container");
const gridSize = 16;

function createGrid(rows, cols) {
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click", () => {
      if (cell.style.backgroundColor === "black") {
        cell.style.backgroundColor = "white";
      } else {
        cell.style.backgroundColor = "black";
      }
    });
    container.appendChild(cell);
  }
}

createGrid(gridSize, gridSize);
