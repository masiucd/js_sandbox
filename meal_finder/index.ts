// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

(() => {
  const formElement = document.querySelector("form") as HTMLFormElement;
  const mealInputEl = document.getElementById("meal-input") as HTMLInputElement;
  const randomBtn = document.getElementById("random-btn") as HTMLButtonElement;

  const singleMeal = [];

  async function getData(endpoint: string): Promise<void> {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${endpoint}`,
    );
    const data = await res.json();

    console.log(data);
  }

  function searchMeal(e: Event) {
    e.preventDefault();
    console.log(mealInputEl.value);
    mealInputEl.value = "";
  }

  formElement.addEventListener("submit", searchMeal);
})();
