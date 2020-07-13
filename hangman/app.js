(function IFFI() {
  const wrongLettersElement = document.querySelector('.wrong-letters');
  const wordElement = document.getElementById('word');
  const modalElement = document.getElementById('modal');
  const hangmanParts = document.querySelectorAll('.figure-part');
  const finalMessageH3 = document.querySelector('#final-message');
  const newGameBtn = document.querySelector('#new-game');
  const notificationWrapperElement = document.querySelector(
    '.notification-wrapper',
  );
  const notificationMsg = document.getElementById('notification');

  const wordsList = ['javascript', 'haskell', 'ocaml', 'react', 'go'];

  let correctLettersList = [];
  let wrongLettersList = [];
  let errorCount = 0;

  function showNotification() {
    notificationWrapperElement.classList.add('show-notification');
    notificationMsg.innerText = 'You Already used that letter!!! 😡🍕';
    setTimeout(() => {
      notificationWrapperElement.classList.remove('show-notification');
      notificationMsg.innerText = '';
    }, 4000);
  }

  // Update the wrong letters
  function updateWrongLetters() {
    wrongLettersElement.innerHTML = `${
      wrongLettersList.length > 0 ? `<p id="wrong-msg">Wrong words</p>` : ''
    }
    ${wrongLettersList.map((letter) => `<span>${letter}</span>`)}
    `;

    hangmanParts.forEach((part, index) => {
      const errors = wrongLettersList.length;

      if (index < errors) {
        part.style.display = 'block';
      } else {
        part.style.display = 'none';
      }
    });
  }

  function randomWord(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  let chosenWord = randomWord(wordsList);

  const handleWord = (word) => {
    return word
      .split('')
      .map(
        (letter) =>
          `<span>${correctLettersList.includes(letter) ? letter : ''}</span>`,
      )
      .join('');
  };

  function renderWord() {
    wordElement.innerHTML = `${handleWord(chosenWord)}`;
    let wordPrefix = wordElement.innerText.replace(/\n/g, '');
    if (wordPrefix === chosenWord) {
      finalMessageH3.textContent = `You win granulations 💪🏻!`;
      modalElement.style.transform = 'translateY(0%)';
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      let letter = e.key;
      if (chosenWord.includes(letter)) {
        if (!correctLettersList.includes(letter)) {
          correctLettersList.push(letter);
          renderWord();
        } else {
          showNotification();
        }
      } else {
        keepErrorCount();
        if (!wrongLettersList.includes(letter)) {
          wrongLettersList.push(letter);
          updateWrongLetters();
        } else {
          showNotification();
        }
      }
    }
    console.log('correct letter list', correctLettersList);
    console.log('wrong letter list', wrongLettersList);
  });

  function playAgain() {
    // Clean the arrays!!
    correctLettersList = [];
    wrongLettersList = [];
    chosenWord = randomWord(wordsList);

    renderWord();
    updateWrongLetters();
    modalElement.style.transform = 'translateY(10000%)';
  }

  newGameBtn.addEventListener('click', playAgain);
  function gameOver() {
    modalElement.style.transform = 'translateY(0%)';
    finalMessageH3.textContent = 'You lose the game with to much tries!!! 😭☹️';
  }

  function keepErrorCount() {
    if (errorCount === 6) {
      gameOver();
    }
    errorCount++;
  }

  renderWord();
  console.log(chosenWord);
})();
