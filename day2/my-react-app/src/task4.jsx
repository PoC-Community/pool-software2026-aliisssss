import React, { useState } from 'react';



const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('Form Submitted:', formData);
    };

    if (submitted) return <p>Thank you for your message, {formData.name}!</p>;

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input placeholder="Name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" placeholder="Email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
            <button type="submit">Send</button>
        </form>
    );
};



const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);



    const handleSearch = (e) => {
        const val = e.target.value;
        setQuery(val);
        const mockDb = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express'];
        setResults(mockDb.filter(item => item.toLowerCase().includes(val.toLowerCase())));
    };

    return (
        <div style={{ margin: '20px' }}>
            <h4>Search Items</h4>
            <input value={query} onChange={handleSearch} placeholder="Search..." />
            <ul>
                {query && results.map((res, i) => <li key={i}>{res}</li>)}
            </ul>
        </div>
    );
};

const Task4 = () => (
    <div>
        <h2>Step 4: Forms & Controlled Components</h2>
        <ContactForm />
        <SearchBar />
    </div>
);

export default Task4;
