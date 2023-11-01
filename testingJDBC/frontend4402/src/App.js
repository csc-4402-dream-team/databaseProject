import React, { useState, useEffect } from 'react';
import axios from 'axios';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'monospace',
  fontSize: '1.2rem',
  textAlign: 'center',
  marginTop: '20px',
};

const textAreaStyle = {
  width: '30%',       // Set a fixed width
  minHeight: '10%',   // Set a minimum height
  padding: '10px',
  resize: 'none',      // Disable resizing
  overflowY: 'auto',   // Enable vertical scrolling if needed
};

const example = {
  width: '30%',       // Set a fixed width
  minHeight: '10%',   // Set a minimum height
  maxWidth: '50%',
  padding: '10px',
  resize: 'none',      // Disable resizing
  fontSize: '1rem',
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
  const [sql, setSql] = useState(0);
  const [result, setResult] = useState([]); // State to store the API response

  useEffect(() => {
    // Fetch a simple greeting message
    axios.get('http://localhost:8080/api/hello')
        .then(response => setMessage(response.data))
        .catch(error => setMessage('Error connecting to backend and database.\nPlease make sure backend is up and running at ' + 
                                    'http://localhost:8080.\nIf it is not, open the backend4402 folder and ' + 
                                    'run the main class in Backend4402Application.'));
}, []);

  // const executeSQL = () => {
  //   // Send a POST request with JSON data
  //   axios.post('http://localhost:8080/api/sql', {sql})
  //     .then(response => setData(`${response.data}`))
  //     .catch(error => console.error('Error:', error));
  // };

  const handleExecuteSQL = () => {
    axios.post('http://localhost:8080/api/sql', { sql: sql })
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error('Error executing SQL statement:', error);
        setResult([]);
      });
  };

  const handleSQLChange = (e) => {
    setSql(e.target.value);
  };

  return (
    <div style={containerStyle}>
      <h1>CSC 4402 Example</h1>
      <div>{message}</div>
      <div><p></p></div>
      
      <label>
      SQL Statement:  </label>
      <textarea
        style={textAreaStyle}
        value={sql}
        onChange={handleSQLChange}
      />

      <button onClick={handleExecuteSQL} style={buttonStyle}>
        Execute SQL
      </button>

      <div>
      <h3>Result:</h3>
      {result.map((item, index) => (
        <div key={index}>
          {item.IMAGE_DATA && ( // if the data has an image, load the image.
            <img
            src={`data:image/jpeg;base64,${item.IMAGE_DATA}`}
              alt="Some Image"
              style={{ width: "200px" }}
            />
          )}
          <pre
            style={{
              whiteSpace: "pre-line",
              fontSize: "12px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {JSON.stringify(item, null, 2)}
          </pre>
        </div>
      ))}
    </div>

      
      <div style={example}>
      example statements to try:
      <p>SELECT * FROM CLIENT</p>
      <p>SELECT * FROM PROPERTY</p>
      <p>SELECT * FROM IMAGE</p>
      <p>  INSERT INTO CLIENT (FIRST_NAME, LAST_NAME, EMAIL, PHONE, STREET, CITY, STATE, ZIPCODE) VALUES
    ('John', 'Doe', 'john@example.com', '555-123-4567', '123 Main St', 'City', 'State', '12345'),
    ('Jane', 'Smith', 'jane@example.com', '555-987-6543', '456 Elm St', 'Town', 'State', '54321');</p>
      </div>
  

    </div>
  );
}

export default App;
