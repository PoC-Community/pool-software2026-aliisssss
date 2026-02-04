import React, { useState } from 'react';



const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div style={{ margin: '20px', padding: '10px', border: '1px dashed grey' }}>
            <h4>Counter: {count}</h4>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};



const InputDisplay = () => {
    const [text, setText] = useState('');
    return (
        <div style={{ margin: '20px' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
            <p>Content: {text}</p>
            <p>Character Count: {text.length}</p>
            <button onClick={() => setText('')}>Clear</button>
        </div>
    );
};



const SimpleTodo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput('');
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <h4>Simple Todo</h4>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(t => (
                    <li key={t.id} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                        {t.text}
                        <button onClick={() => setTodos(todos.map(todo => todo.id === t.id ? { ...todo, completed: !todo.completed } : todo))}>Toggle</button>
                        <button onClick={() => setTodos(todos.filter(todo => todo.id !== t.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Task2 = () => (
    <div>
        <h2>Step 2: State Management</h2>
        <Counter />
        <InputDisplay />
        <SimpleTodo />
    </div>
);

export default Task2;
