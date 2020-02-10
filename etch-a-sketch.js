let grid = document.getElementById("grid");
for(i=0; i<16; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for(j=0; j<16; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("mouseover", function(e) {
            this.classList.add("activeCell");
        });
        row.appendChild(cell);
    }
    grid.appendChild(row);
} 