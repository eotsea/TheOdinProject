"use strict";
const container = document.querySelector(".container");
const input = document.getElementById("input");
const generateButton = document.querySelector("button");
let color;
let mouse = false;
const colorPickerBar = (value) => {
  const colorPicker = document.querySelector(".colorPicker");
  for (let i = 0; i < value; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<div class ="colorBox"></div>`;
    li.style.backgroundColor = randomRGB();
    colorPicker.appendChild(li);
    li.addEventListener("click", () => {
      color = li.style.backgroundColor;
    });
  }
};

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
  for (let i = 0; i < count * count; i++) {
    container.append(cellMaker(cellSize));
  }
};

container.addEventListener("mousedown", (e) => {
  mouse = true;
});

container.addEventListener("mouseup", (e) => {
  mouse = false;
});
container.addEventListener("mouseover", (event) => {
  console.log("on hover");
  if(mouse){
    if (event.target.classList.contains("grid-cell")) {
      event.target.style.backgroundColor = color;
    }
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
    colorPickerBar(input.value);
  }
});
