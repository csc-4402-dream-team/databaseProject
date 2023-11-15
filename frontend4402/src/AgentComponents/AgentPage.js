import React, { useState } from "react";
import axios from "axios";
import AgentDashboard from "./AgentDashboard";

const AgentPage = () => {
  const [agentID, setAgentID] = useState("");
  const [loggedInAgent, setLoggedInAgent] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleIDChange = (e) => {
    setAgentID(e.target.value);
  };

  const handleGetAgent = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/agent/getAgent",
        { agentID: agentID }
      );
      console.log(response.data);
      setLoggedInAgent(response.data);
      setLoggedIn(true);
    } catch (error) {
      console.error("Error getting agent:", error.response);
    }
  };


  if (!loggedIn) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Enter Agent ID</h2>
        <input
          type="text"
          name="agentID"
          placeholder="Agent ID"
          style={styles.input}
          onChange={handleIDChange}
        />
        <button style={styles.button} onClick={handleGetAgent}>
          View Information
        </button>
      </div>
    );
  } else {
    return (
      <>
      <AgentDashboard agent={loggedInAgent}></AgentDashboard>
      </>
    );
  }
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
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

export default AgentPage;
