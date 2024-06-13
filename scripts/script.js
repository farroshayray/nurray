var exampleVariable = 'Hello, world!';
console.log(exampleVariable); // This will output 'Hello, world!' in the console
function toggleHiddenText(event) {
    const button = event.target;
    console.log(button);
    const articleContent = button.closest('.article-content'); // Find the closest parent with the class 'article-content'
    console.log(articleContent);
    const hiddenText = articleContent.querySelector('.hidden-text'); // Find the hidden text within that parent
    console.log(hiddenText);
    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        hiddenText.style.maxHeight = '500px'; // Adjust max-height for animation
        button.textContent = 'Show Less...'; // Change button text to 'Show Less...'
    } else {
        hiddenText.style.display = 'none';
        hiddenText.style.maxHeight = '0px'; // Reset max-height for animation
        button.textContent = 'Show More...'; // Change button text back to 'Show More...'
    }
}
function openContactForm() {
    document.getElementById('contactFormPopup').style.display = 'flex';
}
function closeContactForm() {
    document.getElementById('contactFormPopup').style.display = 'none';
}