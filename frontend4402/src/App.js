import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import ClientPage from './ClientComponents/ClientPage';
import AgentPage from './AgentComponents/AgentPage'; // Assuming you have a separate page for agents
import Navigation from './Navigation';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="agent" element={<AgentPage />} />
          <Route path="client" element={<ClientPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;