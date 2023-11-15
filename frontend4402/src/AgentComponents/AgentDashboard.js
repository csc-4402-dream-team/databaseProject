import React, { useState } from "react";
import axios from "axios";

const AgentDashboard = (agent) => {

  const {
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    PHONE,
    LICENSE_NUMBER,
    AGENT_ID
  } = agent.agent;

  const [formData, setFormData] = useState({
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

  const handleAddProperty = async (event) => {
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
      // setFormData(response.data);
      console.log(formData);
      console.log("success");
      const propertyID = response.data;
      console.log(response.data);

      if(propertyID != -1){
         const imageResponse = await axios.post("http://localhost:8080/api/agent/addImage",
         {image : formData.image,
          propertyID : propertyID});
          
         console.log(imageResponse.data);
      }
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

  return (
    <div style={styles.container}>
      <button style={styles.button}>View Properties</button>
      <h1 style={styles.title}>Agent Dashboard</h1>
        <div>
            <p>Agent ID: {AGENT_ID}</p>
            <p>Agent Name: {FIRST_NAME} {LAST_NAME}</p>
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
            <input style={styles.input}
              type="text"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            />
          </label>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'15px' }} >
    <label style={styles.label}>
      Street:
      <input
        style={styles.input2}
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
      />
    </label>

    <label style={styles.label}>
      City:
      <input
        style={styles.input2}
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
    </label>

    <label style={styles.label}>
      State:
      <input
        style={styles.input2}
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />
    </label>

    <label style={styles.label}>
      Zipcode:
      <input
        style={styles.input2}
        type="text"
        name="zipcode"
        value={formData.zipcode}
        onChange={handleChange}
      />
    </label>
  </div >
          <label style={styles.label}>
            List Price:
            <input style={styles.input}
              type="text"
              name="listPrice"
              value={formData.listPrice}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Number of Beds:
            <input style={styles.input}
              type="text"
              name="numBeds"
              value={formData.numBeds}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Number of Baths:
            <input style={styles.input}
              type="text"
              name="numBaths"
              value={formData.numBaths}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Square Footage:
            <input style={styles.input}
              type="text"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Description:
            <textarea style={styles.input}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Status:
            <input style={styles.input}
              type="text"
              name="propertyStatus"
              value={formData.propertyStatus}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            URL to Image:
            <input style={styles.input}
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>

          <button style = {styles.button} type="submit">Submit</button>
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

export default AgentDashboard;
