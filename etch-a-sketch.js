function createGrid(size) {
    let grid = document.getElementById("grid");
    let cellSize = 800 / size;
    for(i=0; i<size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.height = cellSize + "px";
        for(j=0; j<size; j++) {
            let cell = createCell(cellSize);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
} 

function createCell(cellSize) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.style.height = cellSize + "px";
    cell.style.width = cellSize + "px";
    cell.style.backgroundColor = "black";
    cell.style.opacity = "0";
    cell.addEventListener("mouseover", function() {
        this.style.opacity = (this.style.opacity == 1) ? 1 : parseFloat(this.style.opacity) + 0.1;
    });
    return cell;
}

let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    document.getElementById("grid").innerHTML = "";
    createGrid(parseInt(document.getElementById("gridSizeInput").value));
});

createGrid(parseInt(document.getElementById("gridSizeInput").value))