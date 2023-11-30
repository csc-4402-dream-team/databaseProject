package com.example.backend4402.Agent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.sql.Statement;
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

    public int addProperty(String sql) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                    return ps;},
                keyHolder
        );
        if (keyHolder.getKey() != null) {
            // Access generated keys
            Number generatedId = keyHolder.getKey();
            return generatedId.intValue();
        }
        return -1;
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

    public List<Map<String,Object>> getProperties (String sql) {
        return executeSql(sql);
    }

    public List<Map<String,Object>> addTransaction (String sql) {
        return executeSql(sql);
    }

    public List<Map<String, Object>> getAppointments (String sql) {
        return executeSql(sql);
    }

    public List<Map<String, Object>> getClients (String sql) {
        return executeSql(sql);
    }

    public List<Map<String, Object>> getTransactions(String sql) {
        return executeSql(sql);
    }

    public List<Map<String, Object>> getOffice(String sql) {
        return executeSql(sql);
    }

}
