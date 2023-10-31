package com.example.backend4402.entities;import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/agents")
public class AgentController {
    private final List<Agent> agents = new ArrayList<>();
    private long nextAgentId = 1;

    // Get a list of all agents
    @GetMapping("/all")
    public List<Agent> getAllAgents() {
        return agents;
    }

    // Get an agent by ID
    @GetMapping("/get/{id}")
    public Agent getAgentById(@PathVariable Long id) {
        return agents.stream()
                .filter(agent -> agent.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    // Create a new agent
    @PostMapping("/create")
    public Agent createAgent(@RequestBody Agent agent) {
        agent.setId(nextAgentId++);
        agents.add(agent);
        return agent;
    }

    // Update an existing agent
    @PutMapping("/update/{id}")
    public Agent updateAgent(@PathVariable Long id, @RequestBody Agent updatedAgent) {
        for (Agent agent : agents) {
            if (agent.getId().equals(id)) {
                agent.setFirstName(updatedAgent.getFirstName());
                agent.setLastName(updatedAgent.getLastName());
                agent.setEmail(updatedAgent.getEmail());
                return agent;
            }
        }
        return null;
    }
}