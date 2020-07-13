(function IFFI() {
  const keyboard = document.querySelector('.keyboard');
  const answer = document.querySelector('.answer');

  let chosenWords = [];

  function words() {
    let xs = ['ball', 'fun', 'cool', 'run', 'me', 'js', 'go', 'haskell'];
    return xs[Math.floor(Math.random() * xs.length)];
  }

  function wordToMatch() {
    let wordToMatch = words().split('');
    console.log('wordToMatch  ', wordToMatch);
    wordToMatch.forEach((x) => {
      chosenWords.some((w) => {
        if (w === x) {
          console.log('match');
        } else {
          console.log('no match');
        }
      });
    });
  }

  const renderKeyBoard = () => {
    let alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    return alphabet.map(
      (a) => (keyboard.innerHTML += ` <div class="key"> ${a} </div> `),
    );
  };

  renderKeyBoard();

  function keyEvent() {
    let keys = document.querySelectorAll('.key');

    [...keys].forEach((key) => {
      key.addEventListener('click', (e) => {
        wordToMatch();
        answer.innerHTML += ` <span>${key.innerHTML}</span> `;
        chosenWords.push(key.innerHTML);
        console.log('chosenWords  ', chosenWords);
      });
    });
  }
  keyEvent();

  //   function generateLetters(amount) {
  //     let letters = Array.from(Array(amount).keys());
  //     console.log(letters);
  //   }
})();
