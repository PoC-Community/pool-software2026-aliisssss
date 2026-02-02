interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

let todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

const input = document.querySelector('.input-group input') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const list = document.querySelector('.List') as HTMLUListElement;

function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function render() {
    list.innerHTML = ''; 
    todos.forEach(todo => {
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');

        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn">&times;</button>
        `;

        li.querySelector('span')?.addEventListener('click', () => {
            todo.completed = !todo.completed;
            save();
            render();
        });

        li.querySelector('.delete-btn')?.addEventListener('click', () => {
            todos = todos.filter(t => t.id !== todo.id);
            save();
            render();
        });

        list.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
        todos.push({ id: Date.now(), text, completed: false });
        input.value = ''; 
        save();
        render();
    }
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

render();
