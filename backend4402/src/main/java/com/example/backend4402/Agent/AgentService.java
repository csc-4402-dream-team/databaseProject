package com.example.backend4402.Agent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.backend4402.DatabaseService;

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

<<<<<<< HEAD
    public boolean addProperty(String sql) {
        try {
            jdbcTemplate.execute(sql);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e);
            return false;
        }
    }

    public Agent getAgent(long agentId) {
        String sql = "SELECT * FROM AGENT WHERE agent_id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[] { agentId }, (resultSet, i) -> {
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
=======
    public List<Map<String, Object>> executeSql(String sqlStatement) {
        List<Map<String, Object>> result = Collections.emptyList();
        try{
            result = jdbcTemplate.queryForList(sqlStatement); // For DML (SELECT) statements
            return result;
        }catch(Exception e){
            try{
                jdbcTemplate.execute(sqlStatement); // Execute DDL statement
            }catch(Exception x){
                e.printStackTrace();
            }
            return result;
>>>>>>> 5eebce320a4a5f9da3a2912a3b0d338bd3ea1e42
        }
    }

    public List<Map<String, Object>> getAgent(long agentId) {
        String sql = "SELECT * FROM AGENT WHERE agent_id = " + agentId;
        return executeSql(sql);
    }

}
