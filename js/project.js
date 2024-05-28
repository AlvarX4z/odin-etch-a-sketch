const DEFAULT_SIZE = 16;

function createGrid(gridSize) {
  if (document.getElementById("grid-container") != null) {
    document.getElementById("grid-container").remove();
  }

  const gridContainer = document.createElement("div");
  gridContainer.setAttribute("id", "grid-container");
  body.appendChild(gridContainer);

  for (let i = 0; i < gridSize * gridSize; i++) {
    let container = document.createElement("div");
    container.setAttribute("class", "container");

    const containerWidthSize = 100.0 / gridSize;
    const containerHeigthSize = 90.0 / gridSize;
    container.style.flexGrow = "0";
    container.style.flexShrink = "0";
    container.style.flexBasis = `${containerWidthSize.toString()}%`;
    container.style.width = `${containerWidthSize}vw`;
    container.style.height = `${containerHeigthSize}vh`;

    container.addEventListener(
      "mouseover",
      () =>
        (container.style.backgroundColor = `rgb(
          ${Math.floor(Math.random() * 256)}, 
          ${Math.floor(Math.random() * 256)}, 
          ${Math.floor(Math.random() * 256)}`)
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
      `Invalid selected size. Creating a default grid size of ${DEFAULT_SIZE.toString()} * ${DEFAULT_SIZE.toString()}.`
    );
    createGrid(DEFAULT_SIZE);
  }
});
body.appendChild(button);
