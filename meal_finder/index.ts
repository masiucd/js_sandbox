/**
   * Search meal by name
  https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

  List all meals by first letter
  https://www.themealdb.com/api/json/v1/1/search.php?f=a
 */

(() => {
  const formElement = document.querySelector("form") as HTMLFormElement;
  const mealInputEl = document.getElementById("meal-input") as HTMLInputElement;
  const randomBtn = document.getElementById("random-btn") as HTMLButtonElement;

  const resultHeading = document.getElementById(
    "result-heading",
  ) as HTMLButtonElement;
  const mealShowcaseEl = document.querySelector(
    ".meal-showcase",
  ) as HTMLDivElement;

  const mealData: Array<Record<string, any>> = [];

  async function getData(endpoint: string): Promise<Array<any>> {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1${endpoint}`,
    );
    const data = await res.json();

    return data;
  }

  async function searchMeal(e: Event) {
    e.preventDefault();
    let inputValue = mealInputEl.value;
    if (inputValue) {
      let mealsData = await getData(`/search.php?s=${mealInputEl.value}`);
      resultHeading.innerHTML = `Search result for <span>${inputValue}</span>`;

      renderMeals(mealsData);
      mealInputEl.value = "";
    } else {
      alert("fill in the input");
    }
  }

  function renderMeals(mealData: Record<string, any>) {
    mealShowcaseEl.innerHTML = mealData.meals
      .map(
        (meal: Record<string, any>) =>
          ` <div class="meal-item">
                <img src=${meal.strMealThumb} alt=${meal.strMeal} />
                <div class="body">
                    <strong> ${meal.strMeal.slice(0, 11)} </strong>
                    <p> From <span>${meal.strArea}</span> </p>
                    <p> Category <span>${meal.strCategory}</span> </p>
                  </div>
            </div>`,
      )
      .join("");
  }

  async function renderRandomMeal() {
    const dish = await getData(`/random.php`);
    mealShowcaseEl.innerHTML = dish?.meals
      .map(
        (meal: Record<string, any>) =>
          ` <div class="meal-item">
        <img src=${meal.strMealThumb} alt=${meal.strMeal} />
      <div class="body">
          <strong> ${meal.strMeal.slice(0, 11)} </strong>
          <p> From <span>${meal.strArea}</span> </p>
          <p> Category <span>${meal.strCategory}</span> </p>
        </div>
      </div>`,
      )
      .join("");
    resultHeading.innerHTML = `Search result for <span>${dish.meals[0].strMeal.slice(
      0,
      11,
    )}</span>`;
  }

  formElement.addEventListener("submit", searchMeal);
  randomBtn.addEventListener("click", renderRandomMeal);
})();
