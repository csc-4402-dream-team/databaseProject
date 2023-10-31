import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AgentList() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch all agents
    axios.get('http://localhost:8080/agents/all')
      .then((response) => {
        setAgents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching agents:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Agents</h1>
      <ul>
        {agents.map((agent) => (
          <li key={agent.agentId}>
            {agent.firstName} {agent.lastName} - {agent.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentList;
