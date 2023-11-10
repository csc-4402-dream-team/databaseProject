import React from 'react';

/*

Create a Transaction
View their office 

*/

const AgentDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Agent Dashboard</h1>

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
