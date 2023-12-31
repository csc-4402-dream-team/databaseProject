package com.example.backend4402.Client;
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
public class ClientService {
    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public ClientService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
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

    public void addRelationship(String clientID, String agentID){
        String client_agent = "MERGE INTO CLIENT_AGENT (CLIENT_ID, AGENT_ID) VALUES " +
                " ("+clientID+","+agentID+");";
        executeSql(client_agent);
    }



    public int getKey(String sql) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                    return ps;},
                keyHolder
        );
        if (keyHolder.getKey() != null) {
            Number generatedId = keyHolder.getKey();
            return generatedId.intValue();
        }
        return -1;
    }

//    public boolean addClient(Client client) {
//        String sql = "INSERT INTO CLIENT (first_name, last_name, email, phone, street, city, state, zipcode) " +
//                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
//        try {
//            int rowsAffected = jdbcTemplate.update(sql,
//                    client.getFirstName(),
//                    client.getLastName(),
//                    client.getEmail(),
//                    client.getPhone(),
//                    client.getStreet(),
//                    client.getCity(),
//                    client.getState(),
//                    client.getZipcode());
//            return rowsAffected > 0;
//        } catch (Exception e) {
//            System.out.println(e);
//            e.printStackTrace();
//            return false;
//        }
//    }

    public List<Map<String, Object>> getClient(long clientId) {
        String sql = "SELECT * FROM CLIENT WHERE client_id = " + clientId;
        return executeSql(sql);
    }
}
