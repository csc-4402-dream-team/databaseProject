import React, { useEffect, useState } from "react";
import axios from "axios";
import AgentPropertyContainer from "./AgentPropertyContainer";

const AgentDashboard = (agent) => {
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [offices, setOffices] = useState([]);

  const { FIRST_NAME, LAST_NAME, EMAIL, PHONE, LICENSE_NUMBER, AGENT_ID } =
    agent.agent;

  const refreshData = async () => {
    try {
      const [
        appointmentsResponse,
        transactionsResponse,
        clientsResponse,
        officesResponse,
      ] = await Promise.all([
        axios.post("http://localhost:8080/api/agent/getAppointments", {
          agentID: AGENT_ID,
        }),
        axios.post("http://localhost:8080/api/agent/getTransactions", {
          agentID: AGENT_ID,
        }),
        axios.post("http://localhost:8080/api/agent/getClients", {
          agentID: AGENT_ID,
        }),
        axios.post("http://localhost:8080/api/agent/getOffice", {
          agentID: AGENT_ID,
        }),
      ]);

      setAppointments(appointmentsResponse.data);
      setTransactions(transactionsResponse.data);
      setClients(clientsResponse.data);
      setOffices(officesResponse.data);
    } catch (error) {
      setAppointments(["Error"]);
      setTransactions(["Error"]);
      setClients(["Error"]);
      setOffices(["Error"]);
    }
  };

  const fetchData = async (apiEndpoint, setDataFunction) => {
    try {
      const response = await axios.post(apiEndpoint, {
        agentID: AGENT_ID,
      });
      setDataFunction(response.data);
    } catch (error) {
      setDataFunction(["Error"]);
    }
  };

  useEffect(() => {
    fetchData("http://localhost:8080/api/agent/getOffice", setOffices);
  }, []);

  useEffect(() => {
    fetchData(
      "http://localhost:8080/api/agent/getAppointments",
      setAppointments
    );
  }, []);

  useEffect(() => {
    fetchData("http://localhost:8080/api/agent/getClients", setClients);
  }, []);

  useEffect(() => {
    fetchData(
      "http://localhost:8080/api/agent/getTransactions",
      setTransactions
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData("http://localhost:8080/api/agent/getOffice", setOffices);
      fetchData(
        "http://localhost:8080/api/agent/getAppointments",
        setAppointments
      );
      fetchData("http://localhost:8080/api/agent/getClients", setClients);
      fetchData(
        "http://localhost:8080/api/agent/getTransactions",
        setTransactions
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Agent Dashboard</h1>
      <div style={styles.profileSection}>
        <p>Agent ID: {AGENT_ID}</p>
        <p>
          Agent Name: {FIRST_NAME} {LAST_NAME}
        </p>
        <p>Email: {EMAIL}</p>
        <p>Phone: {PHONE}</p>
        <p>License: {LICENSE_NUMBER}</p>
      </div>

      <AgentPropertyContainer
        AGENT_ID={AGENT_ID}
        updateData={refreshData}
      ></AgentPropertyContainer>

      <section style={styles.section}>
        <h2>View Appointments</h2>
        {/* Add content for viewing agent's appointments */}
        <div style={styles.scrollContainer}>
          {appointments.map((appointment, index) => (
            <div
              key={index}
              style={{
                ...styles.appointmentCard,
                marginRight: index !== appointment.length - 1 ? "20px" : "0",
              }}
            >
              <h2>Appointment {index + 1}</h2>
              <p>Time: {appointment.APPT_TIME}</p>
              <p>Date: {appointment.APPT_DATE}</p>
              <p>Purpose: {appointment.PURPOSE}</p>
              <p>Client ID: {appointment.CLIENT_ID}</p>
              <p>Property ID: {appointment.PROPERTY_ID}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2>View Your Clients</h2>
        {/* Add content for viewing client information */}
        <div style={styles.scrollContainer}>
          {clients.map((client, index) => (
            <div
              key={index}
              style={{
                ...styles.appointmentCard,
                marginRight: index !== clients.length - 1 ? "20px" : "0",
              }}
            >
              <h2>Client {index + 1}</h2>
              <p>
                Name: {client.CLIENT_FIRST_NAME} {client.CLIENT_LAST_NAME}{" "}
              </p>
              <p> Email: {client.CLIENT_EMAIL}</p>
              <p> Phone: {client.CLIENT_PHONE}</p>
              <p>{client.CLIENT_STREET}</p>
              <p>{client.CLIENT_CITY}</p>
              <p>{client.CLIENT_ZIPCODE}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={styles.section}>
        <h2>View all Transactions</h2>
        {/* Add content for viewing transactions */}
        <div style={styles.scrollContainer}>
          {transactions.map((transaction, index) => (
            <div
              key={index}
              style={{
                ...styles.appointmentCard,
                marginRight: index !== transactions.length - 1 ? "20px" : "0",
              }}
            >
              <h2>Transaction {index + 1}</h2>
              <p>Transaction ID: {transaction.TRANSACTION_ID}</p>
              <p>Client ID: {transaction.CLIENT_ID}</p>
              <p>Date sent: {transaction.DATE_SENT}</p>
              <p>Amount: {transaction.AMOUNT}</p>
              <p>Type: {transaction.TYPE}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2>Your Office</h2>
        <div style={styles.scrollContainer}>
          {offices.map((office, index) => (
            <div
              key={index}
              style={{
                ...styles.appointmentCard,
                marginRight: index !== transactions.length - 1 ? "20px" : "0",
              }}
            >
              <h2>Office {index + 1}</h2>
              <p>{office.STREET}</p>
              <p>{office.CITY}</p>
              <p>{office.ZIPCODE}</p>
              <p>{office.PHONE}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
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
  input2: {
    width: "80%",
    padding: "10px",
    marginLeft: "20px",
    marginRight: "20px",
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
    marginBottom: "8px",
  },
  textarea: {
    padding: "8px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
    resize: "vertical",
  },
  profileSection: {
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between", // Distributes content evenly
    alignItems: "center", // Aligns items at the center vertically
    fontWeight: "200",
    marginBottom: "20px",
    borderTop: "2px solid #ccc",
    borderBottom: "2px solid #ccc",
    paddingBottom: "10px",
  },
  section2: {
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  scrollContainer: {
    display: "inline-block",
  },
  appointmentCard: {
    width: "200px",
    fontSize: "15px",
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px 0",
    display: "inline-block",
    verticalAlign: "top",
  },
};

export default AgentDashboard;
