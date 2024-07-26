document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('.serious-checkbox input[type="checkbox"]');
    const mainText = document.querySelector('.main-text');
    const candidText = document.querySelector('.candid-text');

    function toggleText() {
        if (checkbox.checked) {
            mainText.style.display = 'block';
            candidText.style.display = 'none';
        } else {
            mainText.style.display = 'none';
            candidText.style.display = 'block';
        }
    }

    // Set initial state
    toggleText();

    // Add event listener to checkbox
    checkbox.addEventListener('change', toggleText);
});