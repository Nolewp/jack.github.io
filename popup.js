// Get references to the template and popup
const template = document.querySelector('.clickable-template');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// Add click event to the template
template.addEventListener('click', () => {
    popup.style.display = 'flex'; // Show the popup
});

// Add click event to the close button
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});

// Close the popup if clicked outside the content
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});