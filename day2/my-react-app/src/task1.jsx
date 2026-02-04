import React from 'react';



const Header = () => (
    <header style={{ padding: '20px', textAlign: 'center', backgroundColor: '#6366f1', color: 'white' }}>
        <h1>React Fundamentals</h1>
    </header>
);



const Button = ({ text, onClick }) => (
    <button
        onClick={onClick}
        style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#4f46e5', color: 'white' }}
    >
        {text}
    </button>
);



const Card = ({ title, description }) => (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', margin: '20px', maxWidth: '300px' }}>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Task1 = () => (
    <div className="task1">
        <Header />
        <div style={{ padding: '20px' }}>
            <Button text="Click Me" onClick={() => alert('Button clicked!')} />
            <Card title="Task 1" description="This is your first card component using props." />
        </div>
    </div>
);

export default Task1;
