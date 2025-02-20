function drawBoard() {
  const containerElement = document.getElementById("container");
  containerElement.innerHTML = "";
  for (let i = 0; i < 19; i++) {
    const rowElement = document.createElement("div");
    rowElement.className = "row";
    for (let j = 0; j < 19; j++) {
      const cellElement = document.createElement("div");
      cellElement.textContent = board[i][j];
      cellElement.addEventListener("click", () => makeMove(i, j));
      rowElement.appendChild(cellElement);
    }
    boardElement.appendChild(rowElement);
  }
}
