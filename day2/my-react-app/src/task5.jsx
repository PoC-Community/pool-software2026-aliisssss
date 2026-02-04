import React, { useState } from 'react';



const CardContent = ({ children }) => <div style={{ padding: '10px' }}>{children}</div>;
const CardHeader = ({ title }) => <div style={{ borderBottom: '1px solid #ddd', padding: '10px', fontWeight: 'bold' }}>{title}</div>;
const CardFooter = ({ children }) => <div style={{ borderTop: '1px solid #ddd', padding: '10px', fontSize: '0.8rem' }}>{children}</div>;

const CardSystem = ({ title, children, footer }) => (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
        <CardHeader title={title} />
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
    </div>
);



const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const val = e.target.value;
        setCelsius(val);
        if (val === '') setFahrenheit('');
        else setFahrenheit((parseFloat(val) * 9 / 5 + 32).toFixed(2));
    };

    const handleFahrenheitChange = (e) => {
        const val = e.target.value;
        setFahrenheit(val);
        if (val === '') setCelsius('');
        else setCelsius(((parseFloat(val) - 32) * 5 / 9).toFixed(2));
    };

    return (
        <div style={{ margin: '20px' }}>
            <h4>Temp Converter</h4>
            <label>C: <input type="number" value={celsius} onChange={handleCelsiusChange} /></label>
            <br />
            <label>F: <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} /></label>
        </div>
    );
};

const Task5 = () => (
    <div>
        <h2>Step 5: Composition & Lifting State</h2>
        <CardSystem title="System Info" footer="Last updated: Today">
            <p>This is content passed via children to the card system.</p>
        </CardSystem>
        <TemperatureConverter />
    </div>
);

export default Task5;
