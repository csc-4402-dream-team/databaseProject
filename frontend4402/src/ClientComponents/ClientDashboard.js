import React from 'react';

const ClientDashboard = (client) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Client Dashboard</h1>
        <div>
            <p>Client Name: {client.client.firstName} {client.client.lastName}</p>
            <p>Email: {client.client.email}</p>
            <p>Phone: {client.client.phone}</p>
            <p>License: {client.client.licenseNumber}</p>
        </div>
      <section style={styles.section}>
        <h2>View all properties & Images</h2>
        {/* Add content for viewing properties and images */}
      </section>

      <section style={styles.section}>
        <h2>Schedule an Appointment</h2>
        {/* Add content for scheduling appointments */}
      </section>

      <section style={styles.section}>
        <h2>View Your Appointments</h2>
        {/* Add content for viewing client's appointments */}
      </section>

      <section style={styles.section}>
        <h2>View Your Agents</h2>
        {/* Add content for viewing Agents information */}
      </section>

      <section style={styles.section}>
        <h2>Get All Transactions</h2>
        {/* Add content for viewing all transactions */}
      </section>

      <section style={styles.section}>
        <h2>Pay Outstanding Transactions</h2>
        {/* Add content for paying outstanding transactions */}
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

export default ClientDashboard;
