// add content to grid
const grid = document.getElementById("grid");
for (let i = 0; i < 16*16; i++) {
    const div = document.createElement('div');
    div.setAttribute("class", "item");
    grid.appendChild(div);
}

// set item background colors
const gridItems = document.querySelectorAll(".item");
gridItems.forEach((item) => {
    item.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
});

// update items that are hovered over
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

