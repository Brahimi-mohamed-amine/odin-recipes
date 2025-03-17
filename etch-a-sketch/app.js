const container = document.querySelector("#container");

function makeRows(rows, cols) {
  container.innerHTML = ""; // Clear previous cells if function is called again
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).classList.add('cells');
  };

  let cell = document.querySelectorAll('.cells');
  cell.forEach(cell => {
    // our counter to increase our opacity 10% every time we enter the cell.
    let counter = 0.1; 
    cell.addEventListener('mouseenter', () => {
      cell.classList.add('bgc');
      if (counter < 1.0) { // when it 100% opacity stop
        counter += 0.1;
        cell.style.opacity = counter;
      } else {
        cell.style.opacity = 1.0;
      }
    });
  });
};

makeRows(50, 50);



function update() {
  const cells = prompt("Enter the number of squares per side (max 100):");
  if (cells && cells <= 100) {
    makeRows(cells, cells);
  } else {
    alert("Please enter a number less than or equal to 100.");
  }
}

