package com.example.backend4402;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MyService {
    private final DatabaseService databaseService;

    @Autowired
    public MyService(DatabaseService databaseService) {
        this.databaseService = databaseService;
    }

    public List<Map<String, Object>> executeSql(String statement) {
        return databaseService.executeSQLStatement(statement);
    }
}
