const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-btn');

function createGrid(size) {
    // Clear the existing grid before building a new one
    container.innerHTML = '';

    const totalSquares = size * size;
    
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Dynamically set width and height so the overall container size remains constant
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;
        
        // Initialize custom opacity tracking property on the element
        square.dataset.opacity = 0;

        // Interaction event listener
        square.addEventListener('mouseenter', () => {
            // Get current opacity from dataset and convert to number
            let currentOpacity = parseFloat(square.dataset.opacity);

            // If it hasn't reached full opacity yet, darken/add color
            if (currentOpacity < 1) {
                currentOpacity += 0.1; // Increase by 10% each time
                square.dataset.opacity = currentOpacity;
                
                // Optional: Randomize RGB on the first interaction, or every time
                if (!square.style.backgroundColor) {
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                }
                
                // Apply the progressive opacity
                square.style.opacity = currentOpacity;
            }
        });

        container.appendChild(square);
    }
}

// Button event listener for resizing
resetBtn.addEventListener('click', () => {
    let input = prompt("Enter the number of squares per side for the new grid (max 100):");
    
    if (input === null) return;

    let size = parseInt(input);

    if (isNaN(size) || size <= 0) {
        alert("Please enter a valid positive number.");
    } else if (size > 100) {
        alert("Please enter a number between 1 and 100 to prevent performance issues.");
    } else {
        createGrid(size);
    }
});

// Generate the initial 16x16 grid when the page loads
createGrid(16);