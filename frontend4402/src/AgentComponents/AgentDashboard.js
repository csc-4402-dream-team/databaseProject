import React from 'react';


const AgentDashboard = (agent) => {

  const {
    FIRST_NAME,
    LAST_NAME,
    EMAIL,
    PHONE,
    LICENSE_NUMBER
  } = agent.agent;


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Agent Dashboard</h1>
        <div>
            <p>Agent Name: {FIRST_NAME} {LAST_NAME}</p>
            <p>Email: {EMAIL}</p>
            <p>Phone: {PHONE}</p>
            <p>License: {LICENSE_NUMBER}</p>
            
        </div>
      <section style={styles.section}>
        <h2>List a Property</h2>
        {/* Add content for listing property and uploading Images */}
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
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
  },
};

export default AgentDashboard;
