// important elements
gameTable = document.querySelector("#gameBoard table");

// global variables for advancing game
var player = 0;

// handling drawing x's and o's

function addImageToCell(event) {
    console.log(player);
    var img = document.createElement("img");
    var noImage = event.target.children.length <= 0;
    console.log(event.target.children)
    if (!noImage) {
        console.log("run finished early")
        return;
    }
    
    if (player == 0) {
        img.src = "images/x.png";
        player = 1;
        console.log("first block");
    } else if (player ==1) {
        img.src = "images/o.png";
        player = 0;
        console.log("second block");
    }
    
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.pointerEvents= "none"
    event.target.appendChild(img);
    console.log(event.target.children)
    console.log(player);
    console.log("run complete")
    
}


// adding event listeners to all cells  in the table
for (var i = 0; i < gameTable.children.length; i++) {
    var row = gameTable.children[i];
    for (var j = 0; j < row.children.length; j++) {
        var cell = row.children[j];
        cell.addEventListener("click", addImageToCell);
    }
}


