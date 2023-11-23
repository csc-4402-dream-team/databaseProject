import React, { useState } from "react";
import axios from "axios";

const AgentDashboard = (agent) => {
  const [propStatus, setPropStatus] = useState("");

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

  const [properties, setProperties] = useState({
    agentID: AGENT_ID,
    propertyType: "",
    propertyCity: "",
    propertyStreet: "",
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

  const handleGetProperties = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/agent/getProperties",
        {
          agentID: properties.agentID,
          propertyCity: properties.propertyCity,
          propertyStreet: properties.propertyStreet,
          propertyType: properties.propertyType,
        }
      );
      // console.log(response.data); // Log the response to the console
      setProperties(response.data);
      console.log(response.data);

      const propertiesList = document.getElementById("propertiesList");
      propertiesList.innerHTML = "";
      Object.keys(response.data).forEach((res) => {
        const propertyType = response.data[res]["PROPERTY_TYPE"];
        const propertyStreet = response.data[res]["STREET"];
        const propertyCity = response.data[res]["CITY"];
        const propertyState = response.data[res]["STATE"];
        const propertyZip = response.data[res]["ZIPCODE"];

        const listItem = document.createElement("li");
        listItem.textContent = `${propertyType}: ${propertyStreet}, ${propertyCity}, ${propertyState}, ${propertyZip}`;
        propertiesList.appendChild(listItem);
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

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
      <div>
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

        <div>
          <button onClick={handleGetProperties}>Get Properties</button>
          <ul id="propertiesList"></ul>
        </div>
      </section>

      <section style={styles.section}>
        <h2>View Appointments</h2>
        {/* Add content for viewing agent's appointments */}
      </section>

      <section style={styles.section}>
        <h2>View Your Clients</h2>
        {/* Add content for viewing client information */}
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
};

export default AgentDashboard;
