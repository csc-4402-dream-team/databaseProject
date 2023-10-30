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
  const [data, setData] = useState('');
  const [table, setTable] = useState('');
  const [populate, setPopulate] = useState('');

  useEffect(() => {
    // Create the database locally on load
    axios.post('http://localhost:8080/api/createDatabase')
      .then((response) => {
        setResult(`${response.data}`);
        // If the database was created successfully, proceed to create tables
        if (response.data.includes('created successfully')) {
          console.log("HERE");
          axios.post('http://localhost:8080/api/createTables')
            .then((response) => {
              setTable(`${response.data}`);
              // axios.post('http://localhost:8080/api/populateDatabase')
              // .then((response) => {
              //   setPopulate(`${response.data}`);
              // })
              // .catch((error) => setPopulate('Error populating database. ', error));
            })
            .catch((error) => setTable('Error creating tables. ', error));
        }
      })
      .catch((error) => setData('Error creating database. ', error));
  }, []);
  


  useEffect(() => {
    // Fetch a simple greeting message
    axios.get('http://localhost:8080/api/hello')
        .then(response => setMessage(response.data))
        .catch(error => setMessage('Error connecting to backend and database.\nPlease make sure backend is up and running at ' + 
                                    'http://localhost:8080.\nIf it is not, open the backend4402 folder and ' + 
                                    'run the main class in Backend4402Application.'));
}, []);


  const addNumbers = () => {
    // Send a POST request with JSON data
    axios.post('http://localhost:8080/api/add', { num1, num2 })
      .then(response => setData(`${response.data}`))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={containerStyle}>
      <h1>CSC 4402 Example</h1>
      <div>{message}</div>
      <div><p></p></div>
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
      <div><p></p></div>
      <div>{result}</div>
      <div>{data}</div>
      <div>{table}</div>
      {/* <div>{populate}</div> */}
    </div>
  );
}

export default App;
