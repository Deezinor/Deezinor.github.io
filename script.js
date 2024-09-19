document.addEventListener('DOMContentLoaded', function () {
    const words = ["Games.", "Cultural Heritage Exhibits.", "Communication Tools."];
    let wordIndex = 0;
    const fadeTextElement = document.getElementById('fade-word');

    function changeWord() {
        // Fade out the current word
        fadeTextElement.classList.remove('fade-in');

        setTimeout(() => {
            // Change the word after fade-out completes
            wordIndex = (wordIndex + 1) % words.length;
            fadeTextElement.textContent = words[wordIndex];

            // Fade in the new word
            fadeTextElement.classList.add('fade-in');
        }, 2000);  // Match this to the CSS transition duration (2 seconds in this case)
    }

    // Initial fade-in
    fadeTextElement.classList.add('fade-in');

    // Change word every 4 seconds (give time for fade-out and fade-in)
    setInterval(changeWord, 4000);
});
