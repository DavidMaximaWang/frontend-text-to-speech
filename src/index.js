
import './style.css';
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const readAloudButton = document.getElementById('readAloud');

    readAloudButton.addEventListener('click', () => {
      const text = textInput.value;

      fetch('https://my-text-to-speech.onrender.com/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
        .then(response => response.blob())
        .then((data) => {
          const audio = new Audio(URL.createObjectURL(data));
          audio.play();
        })
        .catch((error) => console.error('Error:', error));
    });
  });
}
