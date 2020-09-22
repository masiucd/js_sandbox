type DifficultyType = "easy" | "medium" | "hard";
(() => {
  const startGameBtn = document.getElementById(
    "start-game",
  ) as HTMLButtonElement;

  const compose = (...fns: Array<Function>) => (val: number | string) =>
    fns.reduceRight((a, b) => b(a), val);
  const numTostring = (n: number): string => n.toString();
  const copyElement = (n: number | string): string =>
    typeof n === "number" ? n.toString().slice() : n.slice();
  const backToNum = (s: string): number => Number(s);

  const icon = document.getElementById("icon") as HTMLDivElement;
  const settingsHeader = document.getElementById("settings") as HTMLDivElement;
  const word = document.getElementById("word") as HTMLHeadingElement;
  const text = document.getElementById("text") as HTMLInputElement;
  const scoreEl = document.getElementById("score") as HTMLSpanElement;
  const timeEl = document.getElementById("time") as HTMLSpanElement;
  const gameAlert = document.querySelector(".game-alert") as HTMLDivElement;
  const endGameAlert = document.querySelector(
    ".end-game-alert",
  ) as HTMLDivElement;

  const difficultySelect = document.getElementById(
    "difficulty",
  ) as HTMLSelectElement;

  const words = [
    "sing",
    "blue",
    "pink",
    "f#",
    "rust",
    "juice",
    "candy",
    "bad",
    "north",
    "bash",
    "java",
    "javascript",
    "haskell",
    "scala",
    "quince",
    "eight",
    "feeble",
    "admit",
    "drag",
    "loving",
    "legia",
    "juve",
    "real",
    "pogon",
    "warszawa",
  ];

  icon.addEventListener("click", () => {
    settingsHeader.classList.toggle("slide-down");
  });

  const setToStorage = (value: string): void => {
    window.localStorage.setItem("difficulty", value);
  };
  const getFromStorage = (key: string): string => {
    return window.localStorage.getItem(key)?.toString() as string;
  };

  const setDifficulty = (difficultyValue: DifficultyType) => {
    switch (difficultyValue) {
      case "easy":
        difficultyOptionValue = "easy";
        return (time = 20);
      case "medium":
        difficultyOptionValue = "medium";
        return (time = 15);
      case "hard":
        difficultyOptionValue = "hard";
        return (time = 10);
      default:
    }
  };

  let isStartGame = false;
  let difficultyOptionValue =
    getFromStorage("difficulty") !== null
      ? getFromStorage("difficulty")
      : "easy";
  let randomWord = "";
  let gameScore = 0;
  let time = 0;

  difficultySelect.value = difficultyOptionValue;

  text.focus();

  const handleTime = () => {
    time--;
    timeEl.innerText = `${time}s`;

    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  };

  const timeInterval = setInterval(handleTime, 1000);

  const gameOver = () => {
    endGameAlert.classList.add("game-over-show");
    endGameAlert.innerHTML = `
      <div class="end-game-alert-body">
        <h3>Game over</h3>
        <p>Final score ${gameScore}</p>
        <button onclick="location.reload()">Play again?</button>
      </div>
    `;
  };

  const getRandomWord = (list: string[]): string =>
    list[Math.floor(Math.random() * list.length)];

  const renderRandomWord = (
    htmlHeader: HTMLHeadingElement,
    list: string[],
  ): void => {
    let word = getRandomWord(list);
    randomWord = word;
    htmlHeader.innerText = word;
  };

  const updateScore = (score: number): void => {
    // let scoreCopy = compose(
    //   backToNum,
    //   numTostring,
    //   copyElement,
    // )(gameScore) as number;
    // scoreCopy++;
    // console.log(scoreCopy);

    scoreEl.innerText = score.toString();
  };

  const checkGame = (score: number): void => {
    if (score >= 100) {
      gameAlert.classList.add("show-winner");
      gameAlert.innerHTML = ` <h3> 😉 Winner 🚀 </h3> `;
      setTimeout(() => {
        gameAlert.classList.remove("show-winner");
      }, 5000);
    }
    console.log(score);
  };

  text.addEventListener("input", (e: any) => {
    let text = e.target.value;
    if (text === randomWord) {
      checkGame(gameScore);

      renderRandomWord(word, words);
      gameScore++;
      updateScore(gameScore);
      e.target.value = "";
      if (difficultyOptionValue === "easy") {
        time += 5;
      } else if (difficultyOptionValue === "medium") {
        time += 3;
      } else if (difficultyOptionValue === "hard") {
        time += 2;
      }
      handleTime();
    }
  });

  difficultySelect.addEventListener("change", (e: any) => {
    isStartGame = true;

    let difficultyValue = e.target.value;

    setToStorage(difficultyValue);
    setDifficulty(difficultyValue);
  });

  renderRandomWord(word, words);

  startGameBtn.addEventListener("click", () => {
    startGameBtn.style.display = "none";
  });
})();
