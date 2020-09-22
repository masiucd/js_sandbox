"use strict";
(() => {
    const startGameBtn = document.getElementById("start-game");
    const compose = (...fns) => (val) => fns.reduceRight((a, b) => b(a), val);
    const numTostring = (n) => n.toString();
    const copyElement = (n) => typeof n === "number" ? n.toString().slice() : n.slice();
    const backToNum = (s) => Number(s);
    const icon = document.getElementById("icon");
    const settingsHeader = document.getElementById("settings");
    const word = document.getElementById("word");
    const text = document.getElementById("text");
    const scoreEl = document.getElementById("score");
    const timeEl = document.getElementById("time");
    const gameAlert = document.querySelector(".game-alert");
    const endGameAlert = document.querySelector(".end-game-alert");
    const difficultySelect = document.getElementById("difficulty");
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
    const setToStorage = (value) => {
        window.localStorage.setItem("difficulty", value);
    };
    const getFromStorage = (key) => {
        var _a;
        return (_a = window.localStorage.getItem(key)) === null || _a === void 0 ? void 0 : _a.toString();
    };
    const setDifficulty = (difficultyValue) => {
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
    let difficultyOptionValue = getFromStorage("difficulty") !== null
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
    const getRandomWord = (list) => list[Math.floor(Math.random() * list.length)];
    const renderRandomWord = (htmlHeader, list) => {
        let word = getRandomWord(list);
        randomWord = word;
        htmlHeader.innerText = word;
    };
    const updateScore = (score) => {
        // let scoreCopy = compose(
        //   backToNum,
        //   numTostring,
        //   copyElement,
        // )(gameScore) as number;
        // scoreCopy++;
        // console.log(scoreCopy);
        scoreEl.innerText = score.toString();
    };
    const checkGame = (score) => {
        if (score >= 100) {
            gameAlert.classList.add("show-winner");
            gameAlert.innerHTML = ` <h3> 😉 Winner 🚀 </h3> `;
            setTimeout(() => {
                gameAlert.classList.remove("show-winner");
            }, 5000);
        }
        console.log(score);
    };
    text.addEventListener("input", (e) => {
        let text = e.target.value;
        if (text === randomWord) {
            checkGame(gameScore);
            renderRandomWord(word, words);
            gameScore++;
            updateScore(gameScore);
            e.target.value = "";
            if (difficultyOptionValue === "easy") {
                time += 5;
            }
            else if (difficultyOptionValue === "medium") {
                time += 3;
            }
            else if (difficultyOptionValue === "hard") {
                time += 2;
            }
            handleTime();
        }
    });
    difficultySelect.addEventListener("change", (e) => {
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
