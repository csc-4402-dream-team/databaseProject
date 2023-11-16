import React, {useState} from 'react';
import ClientPropertyContainer from './ClientPropertyContainer';
const ClientDashboard = (client) => {
  const {
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    PHONE,
    STREET,
    CITY,
    STATE,
    ZIPCODE,
    CLIENT_ID
  } = client.client;


  return (
    <>
    <div style={styles.container}>
       <div style={styles.container}>
        <h1 style={styles.title}>Client Dashboard</h1>
          <div>
            <p>Client Name: {FIRST_NAME} {LAST_NAME}</p>
            <p>Email: {EMAIL}</p>
            <p>Phone: {PHONE}</p>
            <p>Address: {STREET}, {STATE} {ZIPCODE}</p>
          </div>
      <section style={styles.section}>
        <h2>All Properties</h2>
        <ClientPropertyContainer CLIENT_ID={CLIENT_ID}></ClientPropertyContainer>
      </section>
    </div>

      

      <section style={styles.section}>
        <h2>View Your Appointments</h2>
        {/* Add content for viewing client's appointments */}
      </section>

      <section style={styles.section}>
        <h2>View Your Agents</h2>
        {/* Add content for viewing Agents information */}
      </section>

      <section style={styles.section}>
        <h2>Get All Transactions</h2>
        {/* Add content for viewing all transactions */}
      </section>

      <section style={styles.section}>
        <h2>Pay Outstanding Transactions</h2>
        {/* Add content for paying outstanding transactions */}
      </section>
    </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  inputContainer: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  input2:{
    width:"80%",
    padding: "10px",
    marginLeft:"20px",
    marginRight:"20px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  label: {
    marginBottom: '8px',
  },
  textarea: {
    padding: '8px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    resize: 'vertical',
  },
};

export default ClientDashboard;
