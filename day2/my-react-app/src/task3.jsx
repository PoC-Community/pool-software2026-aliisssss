import React, { useState, useEffect } from 'react';



const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading data...</p>;
    return (
        <div>
            <h4>Recent Posts</h4>
            <ul>
                {data.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
};



const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div style={{ margin: '20px' }}>
            <h4>Timer: {seconds}s</h4>
            <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Pause' : 'Start'}</button>
            <button onClick={() => setSeconds(0)}>Reset</button>
        </div>
    );
};

const Task3 = () => (
    <div>
        <h2>Step 3: useEffect & Side Effects</h2>
        <DataFetcher />
        <Timer />
    </div>
);

export default Task3;
