import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #AC3931;
  padding: 10px 0;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  font-weight:200;
  font-size: 24px;
  margin-bottom: 0;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled.li`
  display: inline;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 12px; /* Added padding */
  border-radius: 5px; /* Added border radius */
  transition: background-color 0.3s ease; /* Add a smooth transition effect */

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Transparent white background on hover */
  }
`;

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Title>Red Stick Realty Database Project</Title>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/agent">Agents</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/client">Clients</NavLink>
          </NavItem>
        </NavList>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
