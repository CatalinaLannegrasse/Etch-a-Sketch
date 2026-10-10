# Etch-a-Sketch

A browser-based Etch-a-Sketch toy built with HTML, CSS (Flexbox), and Vanilla JavaScript as part of The Odin Project foundations path.

## Features

* **Dynamic Grid Generation:** Automatically generates a grid of square divs via JavaScript.
* **Custom Grid Sizing:** Includes a button at the top that prompts the user to enter a desired grid size (up to 100x100) while keeping the overall sketch area constant.
* **Random RGB Coloring:** Every square picks a unique random RGB color on the first interaction.
* **Progressive Darkening:** Each subsequent hover darkens the square by 10% (using CSS opacity and custom data attributes) until it reaches full saturation.
* **Flexbox Layout:** Built entirely using CSS Flexbox for alignment and multi-row wrapping.

## Built With

* **HTML5** - Structure and layout
* **CSS3** - Styling and Flexbox grid layout
* **Vanilla JavaScript** - DOM manipulation, event listeners, and dynamic state tracking (`dataset`)

## What I Learned

* How to dynamically create and manipulate DOM elements using JavaScript loops.
* Utilizing CSS Flexbox (`flex-wrap: wrap`) to manage fluid layouts.
* Storing custom element states using HTML data attributes (`dataset.opacity`).
* Implementing user input validation to prevent performance crashes.