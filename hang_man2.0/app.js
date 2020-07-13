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
  function randomWord(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  let selectedWord = randomWord(wordsList);

  console.log(selectedWord);
})();
