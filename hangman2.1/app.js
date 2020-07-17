(function () {
  const wrongWordsEl = document.getElementById('wrong-words');
  const selectedWord = document.getElementById('selected-word');
  const word = document.getElementById('word');
  const finalMsg = document.getElementById('final-msg');
  const modal = document.getElementById('modal');
  const statusEl = document.getElementById('status');
  const manParts = document.querySelectorAll('.figure-part');
  const wrongWordTitleEl = document.getElementById('wrong-word-title');
  const statusH3El = document.getElementById('status-h3');
  const newGameBtn = document.getElementById('new-game');

  let wordsList = ['apa', 'masiu', 'pysia', 'hector', 'legia'];

  let wrongWordsList = [];
  let correctWordsList = [];

  /**
   *
   * @param {Array} arr
   */
  function randomWord(arr = wordsList) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let gameWord = randomWord(wordsList);

  function gameOver(params) {}

  function handleLetter(input = '', list, id) {
    return input
      ? input
          .split('')
          .map(
            (letter) =>
              `<span id="${id}">${
                list.includes(letter) ? letter : ''
              }</span>  `,
          )
          .join('')
      : `${list.map((letter) => `<span id="${id}">${letter}</span>`).join('')}`;
  }

  function handleHangManParts(manPartsList) {
    manPartsList.forEach((part, index) => {
      const errors = wrongWordsList.length;

      if (index < errors) {
        part.style.display = 'block';
      } else {
        part.style.display = 'none';
      }
    });

    if (wrongWordsList.length === manPartsList.length) {
      finalMsg.innerText = `You lost the game 🙈`;
      modal.style.transform = `translateY(0%)`;
    }
  }

  function handleWrongWords() {
    wrongWordTitleEl.innerText = ` Wrong words 🙈`;
    wrongWordsEl.innerHTML = `${handleLetter(
      null,
      wrongWordsList,
      'wrong-word',
    )}`;

    handleHangManParts(manParts);
  }
  function render() {
    word.innerHTML = `${handleLetter(gameWord, correctWordsList, 'letter')}`;
    let prefix = word.innerText.replace(/\n/g, '');
    if (prefix === gameWord) {
      finalMsg.innerText = 'You win λ😎';
      modal.style.transform = `translateY(0%)`;
    }
  }

  function showStatus() {
    statusEl.style.transform = `translateX(0%)`;
    statusH3El.innerText = `You have already used that letter ! 🦆`;
    setTimeout(() => {
      statusEl.style.transform = `translateX(-10000%)`;
    }, 3000);
  }

  window.addEventListener('keydown', (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      let letter = e.key;
      if (gameWord.includes(letter) && !correctWordsList.includes(letter)) {
        correctWordsList.push(letter);
        render();
      } else if (wrongWordsList.includes(letter)) {
        showStatus();
        // keepErrorCount();
      } else if (
        !gameWord.includes(letter) &&
        !wrongWordsList.includes(letter)
      ) {
        wrongWordsList.push(letter);
        handleWrongWords();
      }
    }
  });

  function newGameEvent() {
    wrongWordsList = [];
    correctWordsList = [];
    gameWord = randomWord();
    render();
    handleWrongWords();
    modal.style.transform = `translateY(-10000%)`;
    console.log(gameWord);
  }

  newGameBtn.addEventListener('click', newGameEvent);

  console.log(gameWord);
  render();
})();
