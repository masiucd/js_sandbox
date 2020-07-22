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
        }
    };
}
var stack = Stack();
stack.push(21);
stack.push(1);
stack.push(66);
stack.push(6);
console.log(stack.show());
console.log(stack.peek());
console.log(stack.size());
stack.pop();
console.log(stack.show());
