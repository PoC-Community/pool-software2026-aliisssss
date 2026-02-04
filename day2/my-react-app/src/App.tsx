import { useState, useEffect } from 'react';
import type { Todo } from './types/todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoStats from './components/TodoStats';
import './App.css';

type FilterValue = 'all' | 'active' | 'completed';

function App() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState<FilterValue>('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: Date.now(),
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id: string, newText: string) => {
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
        );
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const activeCount = todos.filter((todo) => !todo.completed).length;

    return (
        <div className="app-container">
            <header>
                <h1>My Tasks</h1>
                <p>Stay organized and productive</p>
            </header>

            <main>
                <TodoForm onAdd={addTodo} />

                <div className="todo-controls">
                    <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
                    <TodoStats count={activeCount} onClearCompleted={clearCompleted} />
                </div>

                <TodoList
                    todos={filteredTodos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                />
            </main>
        </div>
    );
}

export default App;
