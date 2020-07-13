(function () {
  const container = document.querySelector('.container');
  const line = document.querySelector('.line');
  const progress = document.querySelector('.progress');
  const btnStart = document.getElementById('btn-start');
  const selectSpeed = document.getElementById('speed-select');
  const h3 = document.querySelector('h3');

  let count = 0;
  let speedChoice = 1;

  function randomNum(number) {
    return Math.floor(Math.random() * number);
  }

  function randomColor() {
    const [a, b, c] = randomNum(5).toFixed(2).split('');

    let float = `${c}${b}${a}`;
    return `rgba(${randomNum(250)},${randomNum(250)}, ${randomNum(250)}, 0.8)`;
  }

  function repeat() {
    setInterval(() => {
      if (count <= 100) {
        count += speedChoice;
        progress.style.width = `${count}%`;
        progress.style.background = randomColor();
      }
    }, 1000);
    if (count === 100) {
      return;
    }
  }

  btnStart.addEventListener('click', () => {
    repeat();
    updateCount();
  });

  function updateCount() {
    console.log(count);
  }

  selectSpeed.addEventListener('change', (e) => {
    let chosenSpeed = Number(e.target.value);
    speedChoice = chosenSpeed;
  });

  function jump(word) {
    console.log([...word].map((x) => `<span>${x}</span>`).join(''));
    return [...word].map((x) => `<span>${x}</span>`).join('');
  }

  h3.innerHTML = jump(h3.textContent);
})();
