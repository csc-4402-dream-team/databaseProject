import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './clientProp.css'; // Assuming this file is in the same directory

const PropertyContainer = (props) => {
  const { CLIENT_ID, updateData } = props; // Extracting CLIENT_ID and updateData from props
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [agent, setAgent] = useState({});

  const [apptStatus, setApptStatus] = useState();

  const [appointmentForm, setAppointmentForm] = useState({
    propertyID: "",
    appt_date: "",
    appt_time: "",
    purpose: "",
  });


  const handleAddAppointment = async (event) => {
    try {
      console.log(appointmentForm);
      const response = await axios.post(
        "http://localhost:8080/api/client/addAppointment",
        {
          agentID: properties[currentIndex].AGENT_ID,
          clientID: CLIENT_ID,
          propertyID: properties[currentIndex].PROPERTY_ID,
          date: appointmentForm.appt_date,
          time: appointmentForm.appt_time,
          purpose: appointmentForm.purpose,
        }
      );
      const appointmentID = response.data;
      console.log(response.data);
      if (appointmentID != -1) {
        setApptStatus("Successfully scheduled appointment!");
        updateData();
      } else {
        setApptStatus("Failed to schedule appointment.");
      }
    } catch (error) {
      setApptStatus("Error adding appointment: " + JSON.stringify(error.response.data));
      console.error("Error adding a appointment", JSON.stringify(error.response.data));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({
      ...appointmentForm,
      [name]: value,
    });
  };


  useEffect(() => {
    // Fetch properties from the API
    axios
      .post('http://localhost:8080/api/client/getProperties')
      .then(async (response) => {
        setProperties(response.data);
      })
      .catch(error => setProperties(["Error"]));
  }, []);

  const handleGetPropertyAgent = async (curAgent) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/client/getPropertyAgent",
        {
          agentID: curAgent,
        }
      );
      const agent = response.data;
      setAgent(agent);
      updateData();
    } catch (error) {
      console.log(error);
    }
    
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        setCurrentIndex(prevIndex => (prevIndex === 0 ? properties.length - 1 : prevIndex - 1));
      } else if (event.keyCode === 39) {
        // Right arrow key
        setCurrentIndex(prevIndex => (prevIndex === properties.length - 1 ? 0 : prevIndex + 1));
      }
    },
    [properties.length]
  );


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const navigateProperty = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? properties.length - 1 : prevIndex - 1));
    } else if (direction === 'next') {
      setCurrentIndex(prevIndex => (prevIndex === properties.length - 1 ? 0 : prevIndex + 1));
    }
    updateData();
    setAgent({});
  };

  return (
    <div className="property-container">
      {properties.length > 0 && (<>
        <div className="custom-slide">
          <div className="arrow left-arrow" onClick={() => navigateProperty('prev')}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="property-content">
            <h2>{properties[currentIndex].PROPERTY_TYPE}</h2>
            <img className='image' src={properties[currentIndex].IMAGE_URL} alt="Property Image" />
            <p>{properties[currentIndex].STREET}, {properties[currentIndex].CITY}, {properties[currentIndex].STATE} - {properties[currentIndex].ZIPCODE}</p>
            <p>Price: ${properties[currentIndex].LIST_PRICE} Bedrooms: {properties[currentIndex].NUM_BEDROOMS} Bathrooms: {properties[currentIndex].NUM_BATHROOMS}</p>
            <p>{properties[currentIndex].DESCRIPTION}</p>

            <button style={styles.button2} onClick={() => handleGetPropertyAgent(properties[currentIndex].AGENT_ID)}  >Get Contact Info</button>
            {Object.keys(agent).length > 0 && (
              <div>
                <p>Agent Information: {agent.FIRST_NAME} {agent.LAST_NAME}, Email: {agent.EMAIL}, Phone: {agent.PHONE}</p>
              </div>
            )}
            {Object.keys(agent).length <= 0 && (
              <div>
                <p> Click Above to see Agent Information! </p>
              </div>
            )}

          </div>
          <div className="arrow right-arrow" onClick={() => navigateProperty('next')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div>
        <section style={styles.section}>
        <h3>Schedule an Appointment for this {properties[currentIndex].PROPERTY_TYPE} Now!</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'15px' }} >
            <label style={styles.label}>
              Appointment Date:
              <input
                style={styles.input2}
                type="date"
                name="appt_date"
                value={appointmentForm.appt_date}
                onChange={handleChange}
              />
            </label>

            <label style={styles.label}>
              Appointment Time:
              <input
              style={styles.input2}
              type="time"
              min="09:00" // Set the minimum time to 09:00 (9 AM)
              max="17:00" // Set the maximum time to 17:00 (5 PM)

              name="appt_time"
              value={appointmentForm.appt_time}
              onChange={handleChange}
        
            />
            </label>
            
            </div>
            <label style={styles.label}>
              Appointment Purpose:
              <input
                style={styles.input2}
                type="text"
                name="purpose"
                maxLength={50}
                value={appointmentForm.purpose}
                onChange={handleChange}
              />
            </label>
            <button style={styles.button} onClick={() => handleAddAppointment()} >Schedule Appointment</button>
            <p>{apptStatus}</p>
      </section>
      </div>
        </>
      )}
    </div>
  );
};


const styles = {
  section: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
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
    marginBottom: '8px',
  },
};

export default PropertyContainer;
