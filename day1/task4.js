var todos = JSON.parse(localStorage.getItem('todos') || '[]');
var input = document.querySelector('.input-group input');
var addBtn = document.getElementById('add-btn');
var list = document.querySelector('.List');
function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function render() {
    list.innerHTML = '';
    todos.forEach(function (todo) {
        var _a, _b;
        var li = document.createElement('li');
        if (todo.completed)
            li.classList.add('completed');
        li.innerHTML = "\n            <span>".concat(todo.text, "</span>\n            <button class=\"delete-btn\">&times;</button>\n        ");
        (_a = li.querySelector('span')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            todo.completed = !todo.completed;
            save();
            render();
        });
        (_b = li.querySelector('.delete-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            todos = todos.filter(function (t) { return t.id !== todo.id; });
            save();
            render();
        });
        list.appendChild(li);
    });
}
addBtn.addEventListener('click', function () {
    var text = input.value.trim();
    if (text) {
        todos.push({ id: Date.now(), text: text, completed: false });
        input.value = '';
        save();
        render();
    }
});
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        addBtn.click();
});
render();
