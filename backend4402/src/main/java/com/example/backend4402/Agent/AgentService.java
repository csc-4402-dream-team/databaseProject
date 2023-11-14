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
        }
    }
    public List<Map<String, Object>> getAgent(long agentId) {
        String sql = "SELECT * FROM AGENT WHERE agent_id = " + agentId;
        return executeSql(sql);
    }

}
