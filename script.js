const container = document.getElementById('grid');
const newGridBtn = document.getElementById('new-grid-btn');

function createGrid(size) {
  // Clear existing grid
  container.innerHTML = '';

  // Update CSS grid properties dynamically
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');

    // Initialise le niveau de noirceur à 0
    cell.dataset.darkness = "0";

    // Ajoute un effet au survol
    cell.addEventListener('mouseover', () => {
      let darkness = parseInt(cell.dataset.darkness, 10);

      if (darkness === 0) {
        // Première interaction → couleur aléatoire
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        cell.dataset.originalColor = `${r},${g},${b}`;
      } else if (darkness < 10) {
        // Couleur déjà définie → assombrir
        const [r, g, b] = cell.dataset.originalColor.split(',').map(Number);
        const factor = 1 - darkness * 0.1;
        const newColor = `rgb(${Math.floor(r * factor)}, ${Math.floor(g * factor)}, ${Math.floor(b * factor)})`;
        cell.style.backgroundColor = newColor;
      }

      if (darkness < 10) {
        cell.dataset.darkness = darkness + 1;
      }
    });

    container.appendChild(cell);
  }
}

// Bouton pour créer une nouvelle grille
newGridBtn.addEventListener('click', () => {
  let size = prompt("Enter the number of squares per side (max: 100):");

  size = parseInt(size);
  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  createGrid(size);
});

// Grille initiale
createGrid(16);
