package com.example.backend4402.Agent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class AgentService {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AgentService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public Agent getAgent(long agentId) {
        String sql = "SELECT * FROM AGENT WHERE agent_id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{agentId}, (resultSet, i) -> {
                Agent agent = new Agent();
                agent.setAgentId(resultSet.getLong("agent_id"));
                agent.setOfficeId(resultSet.getLong("office_id"));
                agent.setFirstName(resultSet.getString("first_name"));
                agent.setLastName(resultSet.getString("last_name"));
                agent.setEmail(resultSet.getString("email"));
                agent.setPhone(resultSet.getString("phone"));
                agent.setLicenseNumber(resultSet.getString("license_number"));
                agent.setDateHired(resultSet.getDate("date_hired")); // Assuming you use LocalDate in Agent class
                return agent;
            });
        } catch (Exception e) {
            e.printStackTrace();
            return null; // Return null or throw an exception based on your error-handling strategy
        }
    }

}
