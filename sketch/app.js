const container = document.querySelector(".container");
const input = document.getElementById("input");
const generateButton = document.querySelector("button");
const randomRGB = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  return `rgb(${x} , ${y}, ${z})`;
};

const cellMaker = (cellSize) => {
  const newCell = document.createElement("div");
  newCell.classList.add("grid-cell");
  newCell.style.width = `${cellSize}px`;
  newCell.style.height = `${cellSize}px`;
  return newCell;
};
const gridMaker = (count) => {
  container.innerHTML = "";
  const cellSize = Math.floor(500 / count);
  for (let i = 0; i < count*count; i++) {
    container.append(cellMaker(cellSize));
  }
};

container.addEventListener("mouseover", (event) => {
  console.log("on hover");
  if (event.target.classList.contains("grid-cell")) {
    event.target.style.backgroundColor = randomRGB();
  }
});

generateButton.addEventListener("click", () => {
  console.log("generate");
  console.log(typeof parseInt(input.value));

  if (
    Number.isInteger(parseInt(input.value)) &&
    parseInt(input.value) <= 100 &&
    parseInt(input.value) > 0
  ) {
    gridMaker(parseInt(input.value));
  }
});
