import React, { useState } from 'react';
import axios from 'axios';
import ClientDashboard from './ClientDashboard';

const ClientPage = () => {
  const [clientID, setClientID] = useState('');
  const[loggedInClient, setLoggedInClient] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  // const [clientData, setClientData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   street: '',
  //   city: '',
  //   state: '',
  //   zipcode: '',
  // });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setClientData({ ...clientData, [name]: value });
  // };

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
  
  // const handleAddClient = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/client/addClient', clientData);
  //     const success = response.data;
  //     console.log(response.data);
  //     if (success) {
  //       setLoggedIn(true);
  //       console.log('Client added successfully');
  //     } else {
  //       setLoggedIn(false);
  //       console.error('Failed to add client');
  //     }
  //   } catch (error) {
  //     console.error('Error adding client:', error);
  //   }
  // };

  if(!loggedIn){
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Enter Client ID</h2>
        <input type="text" name="clientID" placeholder="Client ID" style={styles.input} onChange={handleIDChange} />
        <button style={styles.button} onClick={handleGetClient}>View Information</button>
        
        {/* <h2 style={styles.title}>OR</h2>

        <h2 style={styles.title}>Add a New Client</h2>

        <div style={styles.formContainer}>
          <div style={styles.inputContainer}>
            <input type="text" name="firstName" placeholder="First Name" style={styles.input} onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Last Name" style={styles.input} onChange={handleInputChange} />
            <input type="text" name="email" placeholder="Email" style={styles.input} onChange={handleInputChange} />
            <input type="text" name="phone" placeholder="Phone" style={styles.input} onChange={handleInputChange} />
            <input type="text" name="street" placeholder="Street" style={styles.input} onChange={handleInputChange} />
            <input type="text" name="city" placeholder="City" style={styles.input} onChange={handleInputChange} />
            <input type="text" name="state" placeholder="State" style={styles.input} onChange={handleInputChange} />
            <input type="text" name="zipcode" placeholder="Zipcode" style={styles.input} onChange={handleInputChange} />
          </div>
          <button style={styles.button} onClick={handleAddClient}>Add Client</button>
        </div> */}
      </div>
    );
  }else{
    return(
      <>
      {JSON.stringify(loggedInClient)}
      <ClientDashboard></ClientDashboard>
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
