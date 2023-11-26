import React, {useState, useEffect} from 'react';
import ClientPropertyContainer from './ClientPropertyContainer';
import axios from 'axios';

const ClientDashboard = (client) => {

  const [agents, setAgents] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [appointments, setAppointments] = useState([]);

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

  useEffect(() => {
    // Fetch properties from the API
    axios.post(
      "http://localhost:8080/api/client/getAppointments",
      {
        clientID: CLIENT_ID,
      })
      .then(async (response) => {
        setAppointments(response.data);
      })
      .catch(error => setAppointments(["Error"]));
  }, []);

  useEffect(() => {
    // Fetch properties from the API
    axios.post(
      "http://localhost:8080/api/client/getTransactions",
      {
        clientID: CLIENT_ID,
      })
      .then(async (response) => {
        setTransactions(response.data);
      })
      .catch(error => setTransactions(["Error"]));
  }, []);

  useEffect(() => {
    // Fetch properties from the API
    axios.post(
      "http://localhost:8080/api/client/getAgents",
      {
        clientID: CLIENT_ID,
      })
      .then(async (response) => {
        setAgents(response.data);
      })
      .catch(error => setAgents(["Error"]));
  }, []);


  const handlePayTransaction = async (transactionID) => {
    try {
      const response = await axios.post('http://localhost:8080/api/client/payTransaction', { transactionID : transactionID });
      refreshData();
    } catch (error) {
      console.error('Error paying transaction:', error.response);
    }
  };

  const refreshData = async () => {
    try {
      const [
        appointmentsResponse,
        transactionsResponse,
        agentsResponse,
      ] = await Promise.all([
        axios.post("http://localhost:8080/api/client/getAppointments", { clientID: CLIENT_ID }),
        axios.post("http://localhost:8080/api/client/getTransactions", { clientID: CLIENT_ID }),
        axios.post("http://localhost:8080/api/client/getAgents", { clientID: CLIENT_ID }),
      ]);

      setAppointments(appointmentsResponse.data);
      setTransactions(transactionsResponse.data);
      setAgents(agentsResponse.data);
    } catch (error) {
      // Handle errors if any request fails
      setAppointments(["Error"]);
      setTransactions(["Error"]);
      setAgents(["Error"]);
    }
  };

  return (
    <>
    <div style={styles.container}>
       <div style={styles.container}>
        <h1 style={styles.title}>Client Dashboard</h1>
          <div style={styles.profileSection}>
            <p>Client ID: {CLIENT_ID} </p>
            <p>Client Name: {FIRST_NAME} {LAST_NAME}</p>
            <p>Email: {EMAIL}</p>
            <p>Phone: {PHONE}</p>
            <p>Address: {STREET}, {STATE} {ZIPCODE}</p>
          </div>
      <section style={styles.section}>
        <h2>All Properties</h2>
        <ClientPropertyContainer CLIENT_ID={CLIENT_ID}
          updateData={refreshData} // Pass this function to trigger data update
        ></ClientPropertyContainer>
      </section>
    </div>

      

    <section style={styles.section2}>
      <h2>View Your Appointments</h2>
      <div style={styles.scrollContainer}>
        {appointments.map((appointment, index) => (
          <div key={index} style={{ ...styles.appointmentCard, marginRight: index !== appointments.length - 1 ? '20px' : '0' }}>
            <h2>Appointment {index + 1}</h2>
            <p>Client ID: {appointment.CLIENT_ID}</p>
            <p>Agent ID: {appointment.AGENT_ID}</p>
            <p>Property ID: {appointment.PROPERTY_ID}</p>
            <p>Date: {appointment.APPT_DATE}</p>
            <p>Time: {appointment.APPT_TIME}</p>
            <p>Purpose: {appointment.PURPOSE}</p>
            {/* Add other details here as needed */}
          </div>
        ))}
      </div>
    </section>


      <section style={styles.section2}>
        <h2>View Your Agents</h2>
        <div style={styles.scrollContainer}>
          {agents.map((agent, index) => (
          <div key={index} style={{ ...styles.appointmentCard, marginRight: index !== agents.length - 1 ? '20px' : '0' }}>
          <h2>{`${agent.FIRST_NAME} ${agent.LAST_NAME}`}</h2>
            <p>Email: {agent.EMAIL}</p>
            <p>Phone: {agent.PHONE}</p>
            <p>License Number: {agent.LICENSE_NUMBER}</p>
            <p>Date Hired: {agent.DATE_HIRED}</p>
          </div>
        ))}
        </div>
      </section>

      <section style={styles.section2}>
      <h2>View Your Transactions</h2>
      <div style={styles.scrollContainer}>
        {transactions.map((transaction, index) => (
          <div key={index} style={{ ...styles.appointmentCard, marginRight: index !== transactions.length - 1 ? '20px' : '0' }}>
            <h2>Transaction {index + 1}</h2>
            <p>Property ID: {transaction.PROPERTY_ID}</p>
            <p>Agent ID: {transaction.AGENT_ID}</p>
            <p>Client ID: {transaction.CLIENT_ID}</p>
            {transaction.DATE_SENT ? (
              <p>Date Sent: {transaction.DATE_SENT}</p>
            ) : (
              <p>Status: UNPAID</p>
            )}
            <p>Amount: {transaction.AMOUNT}</p>
            <p>Type: {transaction.TYPE}</p>
            {transaction.DATE_SENT === null && (
              <button style={styles.button} onClick = {()=> handlePayTransaction(transaction.TRANSACTION_ID)}>Pay Transaction</button>
            )}
          </div>
        ))}
      </div>
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
  profileSection: {
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between', // Distributes content evenly
    alignItems: 'center', // Aligns items at the center vertically
    fontWeight: '200',
    marginBottom: '20px',
    borderTop: '2px solid #ccc',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
  },
  section2: {
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  scrollContainer: {
    display: 'inline-block',
  },
  appointmentCard: {
    width: '200px',
    fontSize: '15px',
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px 0',
    display: 'inline-block',
    verticalAlign: 'top',
  },
};

export default ClientDashboard;
