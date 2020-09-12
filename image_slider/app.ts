(() => {
  const images = [
    "https://images.pexels.com/photos/415188/pexels-photo-415188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/373946/pexels-photo-373946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];

  const imageBoxElement = document.getElementById(
    "image-box",
  ) as HTMLDivElement;
  const leftArrow = document.getElementById("left-arrow") as HTMLButtonElement;
  const rightArrow = document.getElementById(
    "right-arrow",
  ) as HTMLButtonElement;

  imageBoxElement.style.backgroundImage = `url(${images[0]})`;

  let index = 0;
  rightArrow.addEventListener("click", () => {
    index += 1;
    if (index === images.length - 1) {
      rightArrow.disabled = true;
      leftArrow.disabled = false;
    }

    imageBoxElement.style.backgroundImage = `url(${images[index]})`;
  });

  leftArrow.addEventListener("click", () => {
    index -= 1;
    if (index === 0) {
      leftArrow.disabled = true;
      rightArrow.disabled = false;
    }

    imageBoxElement.style.backgroundImage = `url(${images[index]})`;
  });
})();
