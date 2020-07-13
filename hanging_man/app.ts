const keyboard = document.querySelector('.keyboard');

function generateLetters<T>(amount: T) {
  let letters: T[] = Array.from(Array(amount).keys());
  console.log(letters);
}

generateLetters(32);
