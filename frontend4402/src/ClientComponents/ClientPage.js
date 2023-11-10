import React, { useState } from 'react';
import axios from 'axios';
import ClientDashboard from './ClientDashboard';

const ClientPage = () => {
  const [clientID, setClientID] = useState('');
  const[loggedInClient, setLoggedInClient] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleIDChange = (e) => {
    setClientID(e.target.value);
  };

  const handleGetClient = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/client/getClient', { clientID : clientID });
      console.log(response.data);
      setLoggedInClient(response.data);
      setLoggedIn(true);

    } catch (error) {
      console.error('Error getting client:', error.response);
    }
  };

  if(!loggedIn){
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Enter Client ID</h2>
        <input type="text" name="clientID" placeholder="Client ID" style={styles.input} onChange={handleIDChange} />
        <button style={styles.button} onClick={handleGetClient}>View Information</button>
       
      </div>
    );
  }else{
    return(
      <>
      <ClientDashboard client={loggedInClient}></ClientDashboard>
      </>
    )
  }
  
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ClientPage;
