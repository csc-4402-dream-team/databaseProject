package com.example.backend4402;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ExampleController {
    private final MyService myService;
    @Autowired
    public ExampleController(MyService myService) {
        this.myService = myService;
    }
    @PostMapping("/sql")
    public List<Map<String, Object>> executeSQLStatement(@RequestBody Map<String, String> statement) {
        return myService.executeSql(statement.get("sql")); // Call your service method here
    }
}
