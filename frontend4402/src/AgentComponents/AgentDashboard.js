import React, { useEffect, useState } from "react";
import axios from "axios";

const AgentDashboard = (agent) => {
  const [propStatus, setPropStatus] = useState("");
  const [properties, setProperties] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const { FIRST_NAME, LAST_NAME, EMAIL, PHONE, LICENSE_NUMBER, AGENT_ID } =
    agent.agent;

  const [propertyFormData, setPropertyFormData] = useState({
    agentID: AGENT_ID,
    propertyType: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    listPrice: "",
    numBeds: "",
    numBaths: "",
    squareFootage: "",
    description: "",
    propertyStatus: "",
    image: "",
  });

  const [transactionFormData, setTransactionFormData] = useState({
    agentID: AGENT_ID,
    clientID: "",
    propertyID: "",
    amount: "",
    dateSent: null,
  });

  function clearPropForm() {
    setPropStatus("");
    setPropertyFormData({
      agentID: AGENT_ID,
      propertyType: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      listPrice: "",
      numBeds: "",
      numBaths: "",
      squareFootage: "",
      description: "",
      propertyStatus: "",
      image: "",
    });
  }

  const handleAddProperty = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/agent/addProperty",
        {
          agentID: propertyFormData.agentID,
          propertyType: propertyFormData.propertyType,
          street: propertyFormData.street,
          city: propertyFormData.city,
          state: propertyFormData.state,
          zipcode: propertyFormData.zipcode,
          listPrice: propertyFormData.listPrice,
          numBeds: propertyFormData.numBeds,
          numBaths: propertyFormData.numBaths,
          squareFootage: propertyFormData.squareFootage,
          description: propertyFormData.description,
          propertyStatus: propertyFormData.propertyStatus,
          image: propertyFormData.image,
        }
      );
      // setFormData(response.data);
      console.log(propertyFormData);
      const propertyID = response.data;
      console.log(response.data);
      if (propertyID != -1) {
        setPropStatus("Successfully uploaded property!");
      } else {
        setPropStatus("Failed to upload property.");
      }
      setTimeout(clearPropForm, 3000);
    } catch (error) {
      setPropStatus("Error uploading property: " + error.response);
      console.error("Error adding a property", error.response);
    }
  };

  useEffect(() => {
    //Fetch get properties
    axios
      .post("http://localhost:8080/api/agent/getProperties", {
        agentID: AGENT_ID,
      })
      .then(async (response) => {
        setProperties(response.data);
      })
      .catch((error) => setProperties(["Error"]));
  }, []);

  useEffect(() => {
    // Fetch get appointments
    axios
      .post("http://localhost:8080/api/agent/getAppointments", {
        agentID: AGENT_ID,
      })
      .then(async (response) => {
        setAppointments(response.data);
      })
      .catch((error) => setAppointments(["Error"]));
  }, []);

  useEffect(() => {
    // Fetch get clients
    axios
      .post("http://localhost:8080/api/agent/getClients", {
        agentID: AGENT_ID,
      })
      .then(async (response) => {
        setClients(response.data);
      })
      .catch((error) => setClients(["Error"]));
  }, []);

  useEffect(() => {
    // Fetch get transactions
    axios
      .post("http://localhost:8080/api/agent/getTransactions", {
        agentID: AGENT_ID,
      })
      .then(async (response) => {
        setTransactions(response.data);
      })
      .catch((error) => setTransactions(["Error"]));
  }, []);

  // Needs to be implemented similar to above
  const handleCreateTransaction = async () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyFormData({
      ...propertyFormData,
      [name]: value,
    });
  };

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
      <section style={styles.section}>
        <h2>List a Property</h2>
        {/* Add content for listing property and uploading Images */}
        <form onSubmit={handleAddProperty} style={styles.inputContainer}>
          <label style={styles.label}>
            Property Type:
            <input
              style={styles.input}
              type="text"
              name="propertyType"
              value={propertyFormData.propertyType}
              onChange={handleChange}
            />
          </label>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <label style={styles.label}>
              Street:
              <input
                style={styles.input2}
                type="text"
                name="street"
                value={propertyFormData.street}
                onChange={handleChange}
              />
            </label>

            <label style={styles.label}>
              City:
              <input
                style={styles.input2}
                type="text"
                name="city"
                value={propertyFormData.city}
                onChange={handleChange}
              />
            </label>

            <label style={styles.label}>
              State:
              <input
                style={styles.input2}
                type="text"
                name="state"
                value={propertyFormData.state}
                onChange={handleChange}
              />
            </label>

            <label style={styles.label}>
              Zipcode:
              <input
                style={styles.input2}
                type="text"
                name="zipcode"
                value={propertyFormData.zipcode}
                onChange={handleChange}
              />
            </label>
          </div>
          <label style={styles.label}>
            List Price:
            <input
              style={styles.input}
              type="text"
              name="listPrice"
              value={propertyFormData.listPrice}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Number of Beds:
            <input
              style={styles.input}
              type="text"
              name="numBeds"
              value={propertyFormData.numBeds}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Number of Baths:
            <input
              style={styles.input}
              type="text"
              name="numBaths"
              value={propertyFormData.numBaths}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Square Footage:
            <input
              style={styles.input}
              type="text"
              name="squareFootage"
              value={propertyFormData.squareFootage}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Description:
            <textarea
              style={styles.input}
              name="description"
              value={propertyFormData.description}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Status:
            <input
              style={styles.input}
              type="text"
              name="propertyStatus"
              value={propertyFormData.propertyStatus}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            URL to Image:
            <input
              style={styles.input}
              type="text"
              name="image"
              value={propertyFormData.image}
              onChange={handleChange}
            />
          </label>

          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>
        <p>{propStatus}</p>
      </section>

      <section style={styles.section}>
        <h2>View your properties</h2>
        {/* View your properties */}
        <div style={styles.scrollContainer}>
          {properties.map((property, index) => (
            <div
              key={index}
              style={{
                ...styles.appointmentCard,
                marginRight: index !== properties.length - 1 ? "20px" : "0",
              }}
            >
              <h2>{property.PROPERTY_TYPE}</h2>
              <p>{property.STREET}</p>
              <p>{property.CITY}</p>
              <p>{property.ZIPCODE}</p>
            </div>
          ))}
        </div>
      </section>

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
                Name: {client.FIRST_NAME} {client.LAST_NAME}{" "}
              </p>
              <p> Email: {client.EMAIL}</p>
              <p> Phone: {client.PHONE}</p>
              <p>{client.STREET}</p>
              <p>{client.CITY}</p>
              <p>{client.ZIPCODE}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2>Create Transaction</h2>
        <form onSubmit={handleCreateTransaction} style={styles.inputContainer}>
          <label style={styles.label}>
            Client ID:
            <input
              style={styles.input}
              type="text"
              name="propertyType"
              value={transactionFormData.clientID}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Property ID:
            <input
              style={styles.input}
              type="text"
              name="propertyType"
              value={transactionFormData.propertyID}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Amount:
            <input
              style={styles.input}
              type="text"
              name="listPrice"
              value={transactionFormData.amount}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Transaction Type:
            <textarea
              style={styles.input}
              name="description"
              value={transactionFormData.type}
              onChange={handleChange}
            />
          </label>

          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>
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
        {/* Add content for office */}
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
