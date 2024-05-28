const DEFAULT_SIZE = 16;

function createGrid(squaredSize) {
  if (document.getElementById("grid-container") != null) {
    document.getElementById("grid-container").remove();
  }
  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("id", "grid-container");
  body.appendChild(gridContainer);

  for (let i = 0; i < squaredSize * squaredSize; i++) {
    let container = document.createElement("div");
    container.setAttribute("class", "container");
    container.addEventListener(
      "mouseover",
      () => (container.style.backgroundColor = "black")
    );
    gridContainer.appendChild(container);
  }
}

const body = document.querySelector("body");

const button = document.createElement("button");
button.innerHTML = "Select grid size";
button.addEventListener("click", function () {
  let gridSize = parseInt(
    prompt("Select a squared grid size between 1 and 100:")
  );
  if (gridSize >= 1 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    console.log(
      `Invalid selected size. Creating a default grid size of ${DEFAULT_SIZE.toString} * ${DEFAULT_SIZE.toString}.`
    );
    createGrid(DEFAULT_SIZE);
  }
});
body.appendChild(button);
