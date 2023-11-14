import React, { useState } from "react";
import axios from "axios";

const AgentDashboard = (agent) => {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    agentID: "",
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
  });

  const handleAddAgent = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/agent/addProperty",
        {
          agentID: formData.agentID,
          propertyType: formData.propertyType,
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
          listPrice: formData.listPrice,
          numBeds: formData.numBeds,
          numBaths: formData.numBaths,
          squareFootage: formData.squareFootage,
          description: formData.description,
          propertyStatus: formData.propertyStatus,
        }
      );
      setFormData(response.data);
      console.log("success");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding a property", error.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
=======

  const {
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    PHONE,
    LICENSE_NUMBER
  } = agent.agent;

>>>>>>> 5eebce320a4a5f9da3a2912a3b0d338bd3ea1e42

  return (
    <div style={styles.container}>
      <button style={styles.button}>View Properties</button>
      <h1 style={styles.title}>Agent Dashboard</h1>
<<<<<<< HEAD
      <div>
        <p>
          Agent Name: {agent.agent.firstName} {agent.agent.lastName}
        </p>
        <p>Email: {agent.agent.email}</p>
        <p>Phone: {agent.agent.phone}</p>
        <p>License: {agent.agent.licenseNumber}</p>
      </div>
=======
        <div>
            <p>Agent Name: {FIRST_NAME} {LAST_NAME}</p>
            <p>Email: {EMAIL}</p>
            <p>Phone: {PHONE}</p>
            <p>License: {LICENSE_NUMBER}</p>
            
        </div>
>>>>>>> 5eebce320a4a5f9da3a2912a3b0d338bd3ea1e42
      <section style={styles.section}>
        <h2>List a Property</h2>
        {/* Add content for listing property and uploading Images */}
        <form onSubmit={handleAddAgent} style={styles.inputContainer}>
          <label style={styles.input}>
            Agent ID:
            <input
              type="text"
              name="agentID"
              value={formData.agentID}
              onChange={handleChange}
            />
          </label>

          <label>
            Property Type:
            <input
              type="text"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            />
          </label>

          <label>
            Street:
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
          </label>

          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>

          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </label>

          <label>
            Zipcode:
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
            />
          </label>

          <label>
            List Price:
            <input
              type="text"
              name="listPrice"
              value={formData.listPrice}
              onChange={handleChange}
            />
          </label>

          <label>
            Number of Beds:
            <input
              type="text"
              name="numBeds"
              value={formData.numBeds}
              onChange={handleChange}
            />
          </label>

          <label>
            Number of Baths:
            <input
              type="text"
              name="numBaths"
              value={formData.numBaths}
              onChange={handleChange}
            />
          </label>

          <label>
            Square Footage:
            <input
              type="text"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleChange}
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Status:
            <input
              type="text"
              name="propertyStatus"
              value={formData.propertyStatus}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>

      <section style={styles.section}>
        <h2>View your properties</h2>
        {/* View your properties */}
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
        {/* Add content for creating transactions */}
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
    marginBottom: "10px",
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
};

export default AgentDashboard;
