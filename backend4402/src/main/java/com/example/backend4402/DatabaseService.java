package com.example.backend4402;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class DatabaseService {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DatabaseService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Returns an empty list for DDL statements and a list of results for DML statements
    public List<Map<String, Object>> executeSQLStatement(String sqlStatement) {
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
}
