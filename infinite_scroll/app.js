"use strict";
// https://jsonplaceholder.typicode.com/posts?_limit=3
(() => {
    const postsDivElements = document.getElementById("posts");
    const loaderElement = document.querySelector(".loader");
    const filterInputEl = document.querySelector(".filter");
    let limit = 5;
    let page = 1;
    const getData = (url) => async (endPoint) => {
        const res = await fetch(`${url}${endPoint}`);
        const data = await res.json();
        return data;
    };
    const render = (divElement, list) => {
        let postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = list
            .map(({ body, title, id }) => `
        <div class="number-image"> <span>${id}</span> </div>
        <div class="content">
          <h2 id="post-title">${title}</h2>
          <p id="post-body">
          ${body}
          </p>
        </div>
        `)
            .join("");
        divElement.appendChild(postDiv);
    };
    async function getPosts(limit, page) {
        const posts = await getData("https://jsonplaceholder.typicode.com")(`/posts?_limit=${limit}&_page=${page}`);
        render(postsDivElements, posts);
    }
    function searchForPost(event) {
        const term = event.target.value.toLowerCase();
        const posts = document.querySelectorAll(".post");
        posts.forEach((post) => {
            let postEl = post;
            const title = postEl.querySelector("#post-title")?.textContent;
            const body = postEl.querySelector("#post-body")?.textContent;
            if (title?.includes(term) || body?.includes(term)) {
                postEl.style.display = "block";
            }
            else {
                postEl.style.display = "none";
            }
            // if (title?.indexOf(term) > -1 || body?.indexOf(term) > -1) {
            //   postEl.style.display = "block";
            // } else {
            //   postEl.style.display = "none";
            // }
        });
    }
    function showLoading() {
        loaderElement.classList.add("show");
        setTimeout(() => {
            loaderElement.classList.remove("show");
            setTimeout(() => {
                page++;
                getPosts(limit, page);
            }, 300);
        }, 1200);
    }
    getPosts(limit, page);
    window.addEventListener("scroll", () => {
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            showLoading();
        }
    });
    filterInputEl.addEventListener("input", searchForPost);
})();
