"use strict";
const resetButton = document.getElementById("reset");
const gameBoard = (() => {
  const gameBoardItems = document.querySelector(".gameboard");
  const result = document.querySelector(".winner");
  const turn = document.querySelector(".turn");
  let listBox = [...Array(9).keys()].map((e) => ({
    id: e,
    value: "",
  }));
  const checkWinner = () => {
    const filteredListBox = listBox.filter((e) => e.value !== "");
    if (filteredListBox.length <= 4) {
      return "Waiting";
    }
    for (let i = 0; i < 9; i += 3) {
      if (
        listBox[i].value === listBox[i + 1].value &&
        listBox[i + 1].value === listBox[i + 2].value &&
        listBox[i].value !== ""
      ) {
        console.log(`Winner is ${listBox[i].value}`);
        return `Winner is ${listBox[i].value}`;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        listBox[i].value === listBox[i + 3].value &&
        listBox[i + 3].value === listBox[i + 6].value &&
        listBox[i].value !== "" &&
        listBox[i + 3].value !== "" &&
        listBox[i + 6].value !== ""
      ) {
        console.log(`Winner is  dikey ${listBox[i].value}`);
        return `Winner is ${listBox[i].value}`;
      }
    }
    if (
      listBox[0].value === listBox[4].value &&
      listBox[4].value === listBox[8].value
    ) {
      console.log(`Winner is ${listBox[4].value}`);
      return `Winner is ${listBox[4].value}`;
    }
    if (
      listBox[2].value === listBox[4].value &&
      listBox[4].value === listBox[6].value
    ) {
      console.log(`Winner is ${listBox[4].value}`);
      return `Winner is ${listBox[4].value}`;
    }
    if (filteredListBox.length > 4 && filteredListBox.length < 9) {
      console.log(filteredListBox.length);
      return "Waiting more";
    }
    if (filteredListBox.length === 9) {
      console.log("Its a Draw");
      return "Its a Draw";
    }
  };
  const gridMaker = () => {
    let mark = "X";
    turn.innerText = `${mark} turn`;
    listBox.forEach((e) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.addEventListener("click", () => {
        if (card.innerText === "") {
          if (mark === "O") {
            e.value = mark;
            card.innerText = e.value;
            mark = "X";
            turn.innerText = `${mark} turn`;
          } else if (mark === "X") {
            e.value = mark;
            card.innerText = e.value;
            mark = "O";
            turn.innerText = `${mark} turn`;
          }
          result.innerText = checkWinner();
        }
        console.log(listBox);
      });
      gameBoardItems.append(card);
    });
  };
  const resetList = () => {
    listBox = listBox.map((e) => ({
      id: e.id,
      value: "",
    }));
    gameBoardItems.innerHTML = "";
    result.innerText = "";
    gridMaker();
  };
  return { gridMaker, resetList };
})();

gameBoard.gridMaker();

resetButton.addEventListener("click", () => {
  gameBoard.resetList();
});
