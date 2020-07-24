(function () {
  var stackEl = document.getElementById('stack');
  var pushBtn = document.getElementById('push-btn');
  var popBtn = document.getElementById('pop-btn');
  var peekBtn = document.getElementById('peek-btn');
  var sizeBtn = document.getElementById('size-btn');
  var stackDataSelectEl = document.getElementById('stack-data');
  var showPeek = document.getElementById('show-peek');
  var showSize = document.getElementById('show-size');
  function renderOptionElements() {
    var xs = Array.from(Array(10).keys());
    stackDataSelectEl.innerHTML += xs.map(function (x) {
      return '<option value="' + (x + 1) + '">' + (x + 1) + '</option/>';
    });
  }
  function Stack() {
    var stack = [];
    return {
      push: function (data) {
        stack.push(data);
      },
      pop: function () {
        stack.pop();
      },
      peek: function () {
        return stack[stack.length - 1];
      },
      size: function () {
        return stack.length;
      },
      show: function () {
        return stack;
      },
      update: function () {
        console.log(stack);
      },
      render: function () {
        stackEl.innerHTML =
          '' +
          stack
            .map(function (s) {
              return '<div id="stack-item"><span> ' + s + '</span> </div>';
            })
            .join('');
      },
    };
  }
  var stack = Stack();
  var current = 0;
  stackDataSelectEl.addEventListener('change', function (event) {
    current = event.target.value;
  });
  pushBtn.addEventListener('click', function () {
    stack.push(current);
    stack.update();
    stack.render();
  });
  popBtn.addEventListener('click', function () {
    stack.pop();
    stack.render();
  });
  peekBtn.addEventListener('click', function () {
    if (stack.size() > 0) {
      console.log(stack.peek());
      showPeek.innerText = 'Peek is ' + stack.peek();
    } else {
      showPeek.innerText = 'there is no peek';
    }
  });
  sizeBtn.addEventListener('click', function () {
    showSize.innerHTML = 'Stacks size is : ' + stack.size();
  });
  renderOptionElements();
})();
