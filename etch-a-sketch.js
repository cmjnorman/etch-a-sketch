function createGrid(size) {
    let grid = document.getElementById("grid");
    let cellSize = 1000 / size;
    for(i=0; i<size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        row.style.height = cellSize + "px";
        for(j=0; j<size; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.height = cellSize + "px";
            cell.style.width = cellSize + "px";
            cell.addEventListener("mouseover", function() {
                this.classList.add("activeCell");
            });
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
} 

let reset = document.getElementById("reset");
reset.addEventListener("click", function() {
    document.getElementById("grid").innerHTML = "";
    createGrid(prompt("How many cells?"));
});

createGrid(16)