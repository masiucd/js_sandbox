const images = document.querySelectorAll("img");

// A naive approach
window.addEventListener("scroll", e => {
  images.forEach(img => {
    console.log("😎");
    const rect = img.getBoundingClientRect().top;
    // console.log(img.getBoundingClientRect());
    // if top of the element is less or equal to the window inner height we know it is visible
    if (rect <= window.innerHeight) {
      const src = img.getAttribute("data-lazy");
      img.setAttribute("src", src);
      img.classList.add("fade");
    }
  });
});
