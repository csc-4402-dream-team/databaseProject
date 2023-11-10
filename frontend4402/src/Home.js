import React from 'react';
import styled from 'styled-components';

const AccentColor = '#AC3931';
const Black = '#000000';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
  color: ${Black};

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    color: #555;
  }
`;

const Section = styled.section`
  margin-bottom: 30px;

  h2 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: ${Black};
  }

  p {
    font-size: 1.2em;
    line-height: 1.5;
    color: #555;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 1.2em;
      margin-bottom: 10px;
      color: #555;

      &:before {
        content: '•';
        margin-right: 5px;
        color: ${Black};
      }
    }
  }
`;

const Services = styled.div`
  display: flex;
  justify-content: space-between;

  .service {
    flex: 1;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #fff;

    h3 {
      font-size: 1.3em;
      margin-bottom: 10px;
      color: ${AccentColor};
    }

    p {
      font-size: 1.1em;
      color: #555;
    }
  }
`;

const ContactSection = styled(Section)`
  text-align: center;

  button {
    background-color: ${AccentColor};
    color: white;
    font-size: 1.2em;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken(${AccentColor}, 10%);
    }
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Header>
        <h1>Red Stick Realty</h1>
        <p></p>
      </Header>

      <Section>
        <h2>Welcome to Your Realty Hub</h2>
        <p>Discover your dream home with our comprehensive real estate agency database. We provide a seamless experience to manage and explore properties, connect with agents, and turn your housing dreams into reality.</p>
      </Section>

      <Services>
        <div className="service">
          <h3>Browse Properties</h3>
          <p>Browse through a wide range of residential and commercial properties. Find the perfect match for your lifestyle and business needs.</p>
        </div>

        <div className="service">
          <h3>Expert Agents</h3>
          <p>Connect with experienced real estate agents who understand your requirements and guide you through the buying or selling process.</p>
        </div>

        <div className="service">
          <h3>Client Appointments</h3>
          <p>Have questions or specific requests? Our appointment scheduling system ensures smooth communication and efficient assistance.</p>
        </div>
      </Services>

      <Section>
        <h2>Why Choose Red Stick Realty?</h2>
        <ul>
          <li>Extensive Property Database</li>
          <li>Professional and Friendly Agents</li>
          <li>Efficient Client Communication</li>
          <li>Easy-to-Use Interface</li>
        </ul>
      </Section>

      <ContactSection>
        <h2>Contact Us</h2>
        <p>Ready to find your dream home? Contact us today for personalized assistance and expert guidance.</p>
        <button>Contact Us</button>
      </ContactSection>
    </HomeContainer>
  );
};

export default HomePage;
