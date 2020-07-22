type StackReturnType<T> = {
  push: (data: T) => void;
  pop: () => void;
  peek: () => T;
  size: () => number;
  show: () => T[];
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
  };
}

let stack = Stack();
stack.push(21);
stack.push(1);
stack.push(66);
stack.push(6);
console.log(stack.show());
console.log(stack.peek());
console.log(stack.size());
stack.pop();
console.log(stack.show());
