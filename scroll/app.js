(function IFFI() {
  const filterWrapperEl = document.querySelector('.filter-wrapper');
  const posts = document.getElementById('posts-container');
  const filterEl = document.getElementById('filter');
  const loadSpinner = document.getElementById('load');

  let data = () => Array.from(Array(30).keys());

  let isLoading = false;
  let page = 1;
  let limit = 5;

  function showLoading() {
    loadSpinner.classList.add('active-loading');
    loadSpinner.innerHTML = `<h1>...Loading!!!</h1>`;
    setTimeout(() => {
      loadSpinner.classList.remove('active-loading');
      loadSpinner.innerHTML = `<h1>!</h1>`;
      setTimeout(() => {
        page++;
        render();
      }, 300);
    }, 2000);
  }

  function render() {
    let postsData = data();
    // let xs = [...postsData, ...Array.from(Array(20).keys(), () => +1)];
    postsData.forEach(
      (x) => (posts.innerHTML += `<div class="item"> ${x}  </div> `),
    );
  }

  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight);
    // console.log(clientHeight + scrollTop);
    if (clientHeight + scrollTop > scrollHeight - 5) {
      console.log('load data!!!');
      showLoading();
    }
  });

  render();
})();
