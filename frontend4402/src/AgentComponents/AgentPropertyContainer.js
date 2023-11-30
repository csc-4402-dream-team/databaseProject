import React, { useState, useEffect } from "react";
import axios from "axios";

const AgentPropertyContainer = (props) => {
  const { AGENT_ID, updateData } = props;
  const [properties, setProperties] = useState([]);
  const [propStatus, setPropStatus] = useState("");
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
    transactionType: "",
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

  const handleCreateTransaction = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/agent/addTransaction",
        {
          agentID: transactionFormData.agentID,
          clientID: transactionFormData.clientID,
          propertyID: transactionFormData.propertyID,
          amount: transactionFormData.amount,
          transactionType: transactionFormData.transactionType,
          dateSent: transactionFormData.dateSent,
        }
      );
      //   setTransactionFormData(response.data);
      // } catch (error) {
      //   console.log(error);
      // }
      const transactionStat = response.data;
      console.log(transactionStat);
      if (transactionStat != -1) {
        setPropStatus("Successfully created transaction!");
        updateData();
      } else {
        setPropStatus("Failed to create transaction.");
      }
      setTimeout(clearPropForm, 3000);
    } catch (error) {
      setPropStatus("Error creating transaction: " + error.response);
    }
  };

  const handleChangeTransaction = (e) => {
    const { name, value } = e.target;
    setTransactionFormData({
      ...transactionFormData,
      [name]: value,
    });
  };

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
      console.log(propertyFormData);
      const propertyID = response.data;
      console.log(response.data);
      if (propertyID != -1) {
        setPropStatus("Successfully uploaded property!");
        updateData();
      } else {
        setPropStatus("Failed to upload property.");
      }
      setTimeout(clearPropForm, 3000);
    } catch (error) {
      setPropStatus("Error uploading property: " + error.response);
      console.error("Error adding a property", error.response);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyFormData({
      ...propertyFormData,
      [name]: value,
    });
  };

  const fetchProperties = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/agent/getProperties",
        {
          agentID: AGENT_ID,
        }
      );
      setProperties(response.data);
    } catch (error) {
      setProperties(["Error"]);
    }
  };
  useEffect(() => {
    fetchProperties();
    const intervalId = setInterval(() => {
      fetchProperties();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
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
        <h2>Create Transaction</h2>
        <form onSubmit={handleCreateTransaction} style={styles.inputContainer}>
          <label style={styles.label}>
            Client ID:
            <input
              style={styles.input}
              type="text"
              name="clientID"
              value={transactionFormData.clientID}
              onChange={handleChangeTransaction}
            />
          </label>
          <label style={styles.label}>
            Property ID:
            <input
              style={styles.input}
              type="text"
              name="propertyID"
              value={transactionFormData.propertyID}
              onChange={handleChangeTransaction}
            />
          </label>
          <label style={styles.label}>
            Amount:
            <input
              style={styles.input}
              type="text"
              name="amount"
              value={transactionFormData.amount}
              onChange={handleChangeTransaction}
            />
          </label>
          <label style={styles.label}>
            Transaction Type:
            <textarea
              style={styles.input}
              type="text"
              name="transactionType"
              value={transactionFormData.transactionType}
              onChange={handleChangeTransaction}
            />
          </label>
          <label style={styles.label}>
            Date sent:
            <br></br>
            <input
              style={styles.input2}
              type="date"
              name="dateSent"
              value={transactionFormData.dateSent}
              onChange={handleChangeTransaction}
            />
          </label>
          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>
        <p>{propStatus}</p>
      </section>
    </div>
  );
};

const styles = {
  section: {
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
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
    width: "80%",
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  button2: {
    width: "150px",
    padding: "10px",
    fontSize: "15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  label: {
    marginBottom: "8px",
  },
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
export default AgentPropertyContainer;
