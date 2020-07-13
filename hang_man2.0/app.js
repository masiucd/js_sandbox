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
  let correctLettersList = ['c', 'o', 'o', 'l'];
  let wrongLettersList = [];
  function randomWord(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
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
    const innerWord = word.innerText.replace(/\n/g, '');
    console.log(innerWord);
    if (innerWord === selectedWord) {
      finalMessage.innerText = `Congratulations You win 💪🏻`;
      popupContainer.style.transform = `translateY(0%)`;
    }
  }

  displayWord();
  console.log(selectedWord);
})();
