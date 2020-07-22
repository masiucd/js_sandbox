(function () {
    var stackEl = document.getElementById('stack');
    var pushBtn = document.getElementById('push-btn');
    var popBtn = document.getElementById('pop-btn');
    var peekBtn = document.getElementById('peek-btn');
    var sizeBtn = document.getElementById('size-btn');
    var showBtn = document.getElementById('show-btn');
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
                stackEl.innerHTML = "" + stack
                    .map(function (s) { return "<div id=\"stack-item\"><span> " + s + "</span> </div>"; })
                    .join('');
            }
        };
    }
    var stack = Stack();
    // stack.render();
    pushBtn.addEventListener('click', function () {
        stack.push(3);
        stack.update();
        stack.render();
    });
    popBtn.addEventListener('click', function () {
        stack.pop();
        stack.render();
    });
})();
