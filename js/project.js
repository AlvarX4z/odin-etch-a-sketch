const body = document.querySelector("body");

const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "grid-container");
body.appendChild(gridContainer);

for (let i = 0; i <= (16 * 16) - 1; i++) {
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  gridContainer.appendChild(container);
}
