(function IFFI() {
  const playAgainBtn = document.getElementById('play-again');
  const finalMessage = document.getElementById('final-message');
  const notification = document.getElementById('notification');
  const popupContainer = document.getElementById('popup-container');
  const word = document.getElementById('word');
  const wrongLetters = document.querySelector('.wrong-letters');
  const hangmanPart = document.querySelectorAll('.figure-part');
  const figure = document.querySelector('.figure-wrapper');

  const wordsList = [
    'cool',
    'bobby',
    'javascript',
    'golang',
    'reactjs',
    'haskell',
  ];
  let correctLettersList = [];
  let wrongLettersList = [];

  function randomWord(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
  function updateWrongLetters() {}

  function wordToArray(word) {
    return word
      .split('')
      .map(
        (letter) =>
          `<span class="letter">${
            correctLettersList.includes(letter) ? letter : ''
          }</span> `,
      )
      .join('');
  }

  let selectedWord = randomWord(wordsList);

  function displayWord() {
    word.innerHTML = `
        ${wordToArray(selectedWord)}
      `;
    const fixedWord = word.innerText.replace(/\n/g, '');
    console.log(fixedWord);
    if (fixedWord === selectedWord) {
      finalMessage.innerText = `Congratulations You win 💪🏻`;
      popupContainer.style.transform = `translateY(0%)`;
    }
  }

  window.addEventListener('keydown', (e) => {
    // console.log(e.keyCode);
    // console.log(String.fromCharCode(e.keyCode));
    // from A-Z
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key;
      if (selectedWord.includes(letter)) {
        if (!correctLettersList.includes(letter)) {
          correctLettersList.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLettersList.includes(letter)) {
          wrongLettersList.push(letter);

          updateWrongLetters();
        } else {
          showNotification();
        }
      }
    }
  });

  displayWord();
  console.log(selectedWord);
})();
