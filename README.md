🎨 Etch-a-Sketch Grid Project

A simple sketchpad grid built with HTML, CSS, and JavaScript. Move your mouse over the squares to draw, like an Etch-a-Sketch! You can change the number of squares per side dynamically while keeping the total grid size fixed.
📸 Live Demo

👉 Live on GitHub Pages
(Replace this link with your actual GitHub Pages link after publishing)
🚀 Features

    🟦 Dynamic square grid (default: 16×16)

    🎯 Fixed drawing area: 960×960 pixels

    ✏️ Hover over cells to color them (like a digital pen)

    🔄 "New Grid" button allows custom grid size (e.g. 64×64)

    ✅ Each cell resizes to fit the total space perfectly

🧰 Built With

    HTML: Basic structure

    CSS: Grid layout and hover effects

    JavaScript: DOM manipulation and grid logic

📦 Installation

    Clone or download the repository:
```bash
git clone https://github.com/Mamoudou10/Etch-a-Sketch-.git
```
    Open index.html in your browser.

✅ No dependencies or installation required — it’s 100% client-side.
🧠 How It Works

    The grid is generated dynamically based on user input.

    The container size remains 960x960 pixels.

    Each square resizes automatically using CSS Grid (repeat(N, 1fr)).

    Hovering over a square changes its color permanently.

📌 Example

    If you enter 16, each square is 60x60px

    If you enter 64, each square becomes 15x15px

    The full sketchpad area never changes size

✨ Future Ideas

    Add a Clear button to reset the board

    Allow color selection (color picker)

    Add eraser mode or random color trails

    Use slider instead of prompt() for better UX

📝 License

This project is open-source and available under the MIT License.