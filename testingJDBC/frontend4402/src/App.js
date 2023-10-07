import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        // Fetch a simple greeting message
        axios.get('http://localhost:8080/api/hello')
            .then(response => setMessage(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const addNumbers = () => {
        // Send a POST request with JSON data
        axios.post('http://localhost:8080/api/add', { num1: 5, num2: 7 })
            .then(response => setResult(response.data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <p>{message}</p>
            <button onClick={addNumbers}>Add Numbers</button>
            <p>{result}</p>
        </div>
    );
}

export default App;
