// script.js
document.addEventListener('DOMContentLoaded', function () {
  const words = [" 3D Artist.", " XR designer.", " Product designer.", " Hobbyist Web-Developer."];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = '';
  let isDeleting = false;
  const typeSpeed = 200;
  const deleteSpeed = 100;
  const delayBetweenWords = 1000;
  const typewriterElement = document.getElementById('typewriter');

  function type() {
      if (isDeleting) {
          currentWord = words[wordIndex].substring(0, letterIndex - 1);
          letterIndex--;
      } else {
          currentWord = words[wordIndex].substring(0, letterIndex + 1);
          letterIndex++;
      }

      typewriterElement.textContent = currentWord;

      if (!isDeleting && letterIndex === words[wordIndex].length) {
          setTimeout(() => isDeleting = true, delayBetweenWords);
      } else if (isDeleting && letterIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
      }

      const speed = isDeleting ? deleteSpeed : typeSpeed;
      setTimeout(type, speed);
  }

  type();
});
