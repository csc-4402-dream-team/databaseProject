import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './clientProp.css'; // Assuming this file is in the same directory

const PropertyContainer = (CLIENT_ID) => {
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const [appointmentForm, setAppointmentForm] = useState({
    clientID: CLIENT_ID,
    agentID: "",
    propertyID: "",
    appt_date: "",
    appt_time: "",
    purpose: "",
  });

  const handleAddAppointment = async (event) => {
    event.preventDefault();
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
          </div>
          <div className="arrow right-arrow" onClick={() => navigateProperty('next')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div>
        <section style={styles.section}>
        <h2>Schedule an Appointment</h2>
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
                name="appt_time"
                value={appointmentForm.appt_time}
                onChange={handleChange}
              />
            </label>
            <label style={styles.label}>
              Purpose:
              <input
                style={styles.input2}
                type="text"
                name="purpose"
                value={appointmentForm.purpose}
                onChange={handleChange}
              />
            </label>
            </div>
      </section>
      </div>
        </>
      )}
    </div>
  );
};


const styles = {
  section: {
    marginBottom: "30px",
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
};

export default PropertyContainer;
