"use strict";
/**
   * Search meal by name
  https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

  List all meals by first letter
  https://www.themealdb.com/api/json/v1/1/search.php?f=a
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    var formElement = document.querySelector("form");
    var mealInputEl = document.getElementById("meal-input");
    var randomBtn = document.getElementById("random-btn");
    var resultHeading = document.getElementById("result-heading");
    var mealShowcaseEl = document.querySelector(".meal-showcase");
    var mealData = [];
    function getData(endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1" + endpoint)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    }
    function searchMeal(e) {
        return __awaiter(this, void 0, void 0, function () {
            var inputValue, mealsData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        inputValue = mealInputEl.value;
                        if (!inputValue) return [3 /*break*/, 2];
                        return [4 /*yield*/, getData("/search.php?s=" + mealInputEl.value)];
                    case 1:
                        mealsData = _a.sent();
                        resultHeading.innerHTML = "Search result for <span>" + inputValue + "</span>";
                        renderMeals(mealsData);
                        mealInputEl.value = "";
                        return [3 /*break*/, 3];
                    case 2:
                        alert("fill in the input");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function renderMeals(mealData) {
        mealShowcaseEl.innerHTML = mealData.meals
            .map(function (meal) {
            return " <div class=\"meal-item\">\n                <img src=" + meal.strMealThumb + " alt=" + meal.strMeal + " />\n                <div class=\"body\">\n                    <strong> " + meal.strMeal.slice(0, 11) + " </strong>\n                    <p> From <span>" + meal.strArea + "</span> </p>\n                    <p> Category <span>" + meal.strCategory + "</span> </p>\n                  </div>\n            </div>";
        })
            .join("");
    }
    function renderRandomMeal() {
        return __awaiter(this, void 0, void 0, function () {
            var dish;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getData("/random.php")];
                    case 1:
                        dish = _a.sent();
                        mealShowcaseEl.innerHTML = dish === null || dish === void 0 ? void 0 : dish.meals.map(function (meal) {
                            return " <div class=\"meal-item\">\n        <img src=" + meal.strMealThumb + " alt=" + meal.strMeal + " />\n      <div class=\"body\">\n          <strong> " + meal.strMeal.slice(0, 11) + " </strong>\n          <p> From <span>" + meal.strArea + "</span> </p>\n          <p> Category <span>" + meal.strCategory + "</span> </p>\n        </div>\n      </div>";
                        }).join("");
                        resultHeading.innerHTML = "Search result for <span>" + dish.meals[0].strMeal.slice(0, 11) + "</span>";
                        return [2 /*return*/];
                }
            });
        });
    }
    formElement.addEventListener("submit", searchMeal);
    randomBtn.addEventListener("click", renderRandomMeal);
})();
