(() => {
  const stackEl = document.getElementById('stack');
  const pushBtn = document.getElementById('push-btn');
  const popBtn = document.getElementById('pop-btn');
  const peekBtn = document.getElementById('peek-btn');
  const sizeBtn = document.getElementById('size-btn');
  const stackDataSelectEl = document.getElementById('stack-data');
  const showPeek = document.getElementById('show-peek');
  const showSize = document.getElementById('show-size');

  function renderOptionElements() {
    let xs = Array.from(Array(10).keys());
    stackDataSelectEl.innerHTML += xs.map(
      (x) => `<option value="${x + 1}">${x + 1}</option/>`,
    );
  }

  type StackReturnType<T> = {
    push: (data: T) => void;
    pop: () => void;
    peek: () => T;
    size: () => number;
    show: () => T[];
    update: () => void;
    render: () => void;
  };

  function Stack<T>(): StackReturnType<T> {
    const stack: T[] = [];

    return {
      push(data: T) {
        stack.push(data);
      },
      pop() {
        stack.pop();
      },
      peek() {
        return stack[stack.length - 1];
      },
      size() {
        return stack.length;
      },
      show() {
        return stack;
      },
      update() {
        console.log(stack);
      },
      render() {
        stackEl.innerHTML = `${stack
          .map((s) => `<div id="stack-item"><span> ${s}</span> </div>`)
          .join('')}`;
      },
    };
  }

  let stack = Stack();
  let current = 0;

  stackDataSelectEl.addEventListener('change', (event: Event) => {
    current = event.target.value;
  });

  pushBtn.addEventListener('click', () => {
    stack.push(current);
    stack.update();
    stack.render();
  });
  popBtn.addEventListener('click', () => {
    stack.pop();

    stack.render();
  });

  peekBtn.addEventListener('click', () => {
    if (stack.size() > 0) {
      console.log(stack.peek());
      showPeek.innerText = `Peek is ${stack.peek()}`;
    }
  });

  sizeBtn.addEventListener('click', () => {
    showSize.innerHTML = `Stacks size is : ${stack.size()}`;
  });

  renderOptionElements();
})();
