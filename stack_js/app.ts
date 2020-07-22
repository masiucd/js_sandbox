(() => {
  const stackEl = document.getElementById('stack');
  const pushBtn = document.getElementById('push-btn');
  const popBtn = document.getElementById('pop-btn');
  const peekBtn = document.getElementById('peek-btn');
  const sizeBtn = document.getElementById('size-btn');
  const showBtn = document.getElementById('show-btn');

  type StackReturnType<T> = {
    push: (data: T) => void;
    pop: () => void;
    peek: () => T;
    size: () => number;
    show: () => T[];
    update() => void;
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
      update(){
        console.log(stack)
      },
      render() {
        stackEl.innerHTML = `${stack
          .map((s) => `<div id="stack-item"><span> ${s}</span> </div>`)
          .join('')}`;
      },
    };
  }

  let stack = Stack();


  // stack.render();

  pushBtn.addEventListener('click', () => {
    stack.push(3);

    stack.update()
    stack.render()
  });
  popBtn.addEventListener('click', () => {
    stack.pop();

    stack.render()
  });
})();
