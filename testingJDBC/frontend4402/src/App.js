import React, { useState, useEffect } from 'react';
import axios from 'axios';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: '20px',
};

const inputContainerStyle = {
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

function App() {
  const [message, setMessage] = useState('');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState('');


  useEffect(() => {
    // Fetch a simple greeting message
    axios.get('http://localhost:8080/api/hello')
        .then(response => setMessage(response.data))
        .catch(error => console.error('Error:', error));
}, []);

  const addNumbers = () => {
    // Send a POST request with JSON data
    axios.post('http://localhost:8080/api/add', { num1, num2 })
      .then(response => setResult(`${response.data}`))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={containerStyle}>
      <h1>Spring Connection Example</h1>
      <div>{message}</div>
      <div style={inputContainerStyle}>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
      <div style={inputContainerStyle}>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      <button onClick={addNumbers} style={buttonStyle}>
        Add Numbers
      </button>
      <div>{result}</div>
    </div>
  );
}

export default App;
