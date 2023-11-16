import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const PropertySlider = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the API
    axios
      .post('http://localhost:8080/api/client/getProperties')
      .then(async (response) => {
        setProperties(response.data);
      })
      .catch(error => setProperties(["Error"]));
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true, // Enable infinite scrolling
    autoplay: true, // Autoplay slides
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    pauseOnHover: false, // Pause autoplay on hover
    className: "custom-carousel"
  };

  return (
    <div>
      <Slider {...settings}>
        {properties.map(property => (
          <div key={property.PROPERTY_ID} className="custom-slide" >
            <h2>{property.PROPERTY_TYPE}</h2>
            <img className='image' src={property.IMAGE_URL} alt="Property Image" />
            <p>{property.STREET}, {property.CITY}, {property.STATE} - {property.ZIPCODE}</p>
            <p>Price: ${property.LIST_PRICE} Bedrooms: {property.NUM_BEDROOMS} Bathrooms: {property.NUM_BATHROOMS}</p>
            <p>{property.DESCRIPTION}</p>
            {/* <p>Status: {property.STATUS}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;
