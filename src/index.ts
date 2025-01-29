
import './style.css';
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput') as HTMLInputElement | null;
    const readAloudButton = document.getElementById('readAloud') as HTMLButtonElement | null;

    if (!textInput || !readAloudButton) {
      console.error('Required elements not found');
      return;
    }

    readAloudButton.addEventListener('click', async () => {
      const text = textInput.value.trim();
      if (!text) {
        console.warn('Text input is empty');
        return;
      }

      try {
        const response = await fetch('https://my-text-to-speech.onrender.com/synthesize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.blob();
        const audio = new Audio(URL.createObjectURL(data));
        audio.play();
      } catch (error) {
        console.error('Error:', error);
      }
    });
  });
}
