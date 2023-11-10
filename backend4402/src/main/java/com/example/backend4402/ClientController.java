package com.example.backend4402;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/client")
public class ClientController {
    private final MyService myService;
    @Autowired
    public ClientController(MyService myService) {
        this.myService = myService;
    }
    @PostMapping("/sql")
    public List<Map<String, Object>> executeSQLStatement(@RequestBody Map<String, String> statement) {
        return myService.executeSql(statement.get("sql")); // Call your service method here
    }
    @PostMapping("/addClient")
    public List<Map<String, Object>> addClient(@RequestBody Map<String, String> arguments){
        return null;
    }
    @PostMapping("/getClient")
    public List<Map<String, Object>> getClient(@RequestBody Map<String, String> arguments){
        return null;
    }
    @PostMapping("/getProperties")
    public List<Map<String, Object>> allProperties(){
        return null;
    }
    @PostMapping("/getImage")
    public List<Map<String, Object>> getImage(@RequestBody Map<String, String> arguments){
        return null;
    }
    @PostMapping("/addAppointment")
    public List<Map<String, Object>> addAppointment(@RequestBody Map<String, String> arguments){
        return null;
    }
    @PostMapping("/getAppointments")
    public List<Map<String, Object>> getAppointments(@RequestBody Map<String, String> arguments){
        return null;
    }
    @PostMapping("/getAgents")
    public List<Map<String, Object>> getAgents(@RequestBody Map<String, String> arguments){
        return null;
    }

    @PostMapping("/getTransactions")
    public List<Map<String, Object>> getTransactions(@RequestBody Map<String, String> arguments){
        return null;
    }

    @PostMapping("/payTransactions")
    public List<Map<String, Object>> payTransactions(@RequestBody Map<String, String> arguments){
        return null;
    }

}
