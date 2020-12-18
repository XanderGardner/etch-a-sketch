let numRows = 16;

// constants
const gridPx = 40 * 16;
const grid = document.getElementById("grid");
setup(numRows);

// setup
function setup(numRows) {
    setSizing(numRows);
    addContent();
    let gridItems = document.querySelectorAll(".item");
    setBackground(gridItems);
    hoverAdd(gridItems);
}

// shake button
const shakeBtn = document.getElementById("shake");
shakeBtn.addEventListener("click", () => {
    const newRowsStr = prompt("How many rows/columns? (Enter between 1 and 100)");
    numRows = parseInt(newRowsStr);
    setup(numRows);
});

// helper functions

// change sizing
function setSizing(numRows) {
    const pxPer = gridPx / numRows;
    const styleCol = "grid-template-columns: repeat("+numRows+", "+pxPer+"px);";
    const styleRow = " grid-template-rows: repeat("+numRows+", "+pxPer+"px)";
    grid.setAttribute("style", styleCol + styleRow);
}

// add content to grid
function addContent() {
    for (let i = 0; i < numRows * numRows; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "item");
        grid.appendChild(div);
    }
}

// set item background colors
function setBackground(gridItems) {
    gridItems.forEach((item) => {
        item.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
    });
}

// add updating items that are hovered over
function hoverAdd(gridItems) {
    gridItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            let opacity = Number(item.style.backgroundColor.slice(-4, -1));
            if (isNaN(opacity)) {
                opacity = Number(item.style.backgroundColor.slice(-3, -1));
            }
            if (opacity < 0.9) {
                opacity += 0.1;
            }
            console.log(opacity);
            item.style.backgroundColor = "rgba(0, 0, 0, " + opacity + ")";
        });
    });
}
