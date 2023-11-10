package com.example.backend4402;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/agent")
public class AgentController {

    private final MyService myService;
    @Autowired
    public AgentController(MyService myService) {
        this.myService = myService;
    }
    @PostMapping("/sql")
    public List<Map<String, Object>> executeSQLStatement(@RequestBody Map<String, String> statement) {
        return myService.executeSql(statement.get("sql")); // Call your service method here
    }
    @PostMapping("/getAgent")
    public List<Map<String, Object>> getAgent(@RequestBody Map<String, String> arguments){
        String agentID = arguments.get("agentID");
        //implement
        return null;
    }

    @PostMapping("/addProperty")
    public List<Map<String, Object>> addProperty(@RequestBody Map<String, String> arguments){
        String agentID = arguments.get("agentID");
        String propertyType = arguments.get("propertyType");
        String street = arguments.get("street");
        String city = arguments.get("city");
        String state = arguments.get("state");
        String zipcode = arguments.get("zipcode");
        String listPrice = arguments.get("listPrice");
        String numBeds = arguments.get("numBeds");
        String numBaths = arguments.get("numBaths");
        String squareFootage = arguments.get("squareFootage");
        String description = arguments.get("description");
        String date = LocalDate.now().toString();
        String status = arguments.get("status");
        //implement
        return null;
    }
    @PostMapping("/addImage")
    public List<Map<String, Object>> addImage(@RequestBody Map<String, String> arguments){
        String propertyID = arguments.get("propertyID");
        String imageData = arguments.get("imageData");
        //implement
        return null;
    }

    @PostMapping("/getProperties")
    public List<Map<String, Object>> getAgentProperties(@RequestBody Map<String, String> arguments){
        String agentID = arguments.get("agentID");
        //implement
        return null;
    }

    @PostMapping("/getAppointments")
    public List<Map<String, Object>> getAppointments(@RequestBody Map<String, String> arguments){
        String agentID = arguments.get("agentID");
        //implement
        return null;
    }

    @PostMapping("/getOffice")
    public List<Map<String, Object>> getOffice(@RequestBody Map<String, String> arguments){
        String agentID = arguments.get("agentID");
        //implement
        return null;
    }

    @PostMapping("/getClients")
    public List<Map<String, Object>> getClients(@RequestBody Map<String, String> arguments){
        String agentID = arguments.get("agentID");
        //implement
        return null;
    }

    @PostMapping("/addTransaction")
    public List<Map<String, Object>> addTransaction(@RequestBody Map<String, String> arguments){
        return null;
    }
}
