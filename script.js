const container = document.getElementById('grid');
const newGridBtn = document.getElementById('new-grid-btn')

function createGrid(size) {
  // Clear existing grid
  container.innerHTML = '';

  // Update CSS grid properties dynamically
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell)    
}
}

newGridBtn.addEventListener('click', () => {
    let size = prompt("Enter the number of squares per side (max: 100):");

    size = parseInt(size);
if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100")
    return;
}

createGrid(size)
})
createGrid(16)

