(() => {
  interface Data {
    image: string;
    text: string;
  }

  const root = document.getElementById("root") as HTMLDivElement;
  const voicesSelect = document.getElementById("voices") as HTMLSelectElement;
  const textBox = document.getElementById("text-box") as HTMLDivElement;
  const textArea = document.getElementById("text-area") as HTMLTextAreaElement;
  const readBtn = document.getElementById("read") as HTMLButtonElement;
  const toggleBtn = document.getElementById("toggle-btn") as HTMLButtonElement;
  const closeBtn = document.getElementById("close") as HTMLDivElement;

  const createSpeechBox = (item: Data) => {
    const box = document.createElement("div");
    box.classList.add("box-item");
    const { image, text } = item;

    box.innerHTML = `
        <img src=${image} alt="${text}" />
        <p class="item-text">${text}</P>
    `;
    box.addEventListener("click", () => {
      setTextMsg(text);
      speakText();

      box.classList.add("active-shadow");
      setTimeout(() => {
        box.classList.remove("active-shadow");
      }, 1950);
    });
    root.appendChild(box);
  };

  const message = new SpeechSynthesisUtterance();

  const getVoices = () => {
    let voices = [];
    voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.innerHTML = `${voice.name} ${voice.lang}`;
      voicesSelect.appendChild(option);
    });
    return voices;
  };

  function setTextMsg(text: string) {
    message.text = text;
  }

  function speakText() {
    speechSynthesis.speak(message);
  }

  const setVoice = (e: any): void => {
    message.voice = getVoices().find((v) => v.name === e.target.value);
  };

  speechSynthesis.addEventListener("voiceschanged", getVoices);

  const initialData: Data[] = [
    {
      image: "./img/arena.jpg",
      text: "Crowded arena",
    },
    {
      image: "./img/art.jpg",
      text: "I love art",
    },
    {
      image: "./img/green.jpg",
      text: "green color",
    },
    {
      image: "./img/blue.jpg",
      text: "blue color",
    },
    {
      image: "./img/pink.jpg",
      text: "pink color",
    },
    {
      image: "./img/red.jpg",
      text: "color red",
    },
    {
      image: "./img/white.jpg",
      text: "color white",
    },
    {
      image: "./img/school.jpg",
      text: "smart in school",
    },
    {
      image: "./img/water.jpg",
      text: "water",
    },
    {
      image: "./img/stone.jpg",
      text: "stones",
    },
    {
      image: "./img/purple.jpg",
      text: "purple",
    },
  ];

  initialData.forEach(createSpeechBox);
  toggleBtn.addEventListener("click", () => {
    textBox.classList.toggle("show-text-box");
  });
  closeBtn.addEventListener("click", () => {
    textBox.classList.toggle("show-text-box");
  });

  voicesSelect.addEventListener("change", setVoice);

  readBtn.addEventListener("click", () => {
    setTextMsg(textArea.value);
    speakText();
  });
  getVoices();
})();
