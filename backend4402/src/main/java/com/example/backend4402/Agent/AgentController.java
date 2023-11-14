package com.example.backend4402.Agent;

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

    private final AgentService agentService;

    @Autowired
    public AgentController(AgentService myService) {
        this.agentService = myService;
    }

    @PostMapping("/getAgent")
    public String getAgent(@RequestBody Map<String, String> arguments) {
        Long agentID = Long.parseLong(arguments.get("agentID"));
        Agent agent = agentService.getAgent(agentID);
        return agent.toJSON();
    }

    @PostMapping("/addProperty")
    public boolean addProperty(@RequestBody Map<String, String> arguments) {
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
        String status = arguments.get("propertyStatus");

        String sql2 = "INSERT INTO PROPERTY (AGENT_ID, PROPERTY_TYPE, STREET, CITY, STATE, ZIPCODE, LIST_PRICE, NUM_BEDROOMS, NUM_BATHROOMS, SQUARE_FOOTAGE, DESCRIPTION, LISTING_DATE, STATUS) VALUES ("
                + agentID + ",'" + propertyType + "','" + street + "','" + city + "','"
                + state
                + "'," + zipcode + "," + listPrice + "," + numBeds + ","
                + numBaths + "," + squareFootage + ",'" + description + "','" + date + "','" + status + "');";

        try {
            agentService.addProperty(sql2);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @PostMapping("/addImage")
    public List<Map<String, Object>> addImage(@RequestBody Map<String, String> arguments) {
        String propertyID = arguments.get("propertyID");
        String imageData = arguments.get("imageData");
        // implement
        return null;
    }

    @PostMapping("/getProperties")
    public List<Map<String, Object>> getAgentProperties(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        // implement
        return null;
    }

    @PostMapping("/getAppointments")
    public List<Map<String, Object>> getAppointments(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        // implement
        return null;
    }

    @PostMapping("/getOffice")
    public List<Map<String, Object>> getOffice(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        // implement
        return null;
    }

    @PostMapping("/getClients")
    public List<Map<String, Object>> getClients(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        // implement
        return null;
    }

    @PostMapping("/addTransaction")
    public List<Map<String, Object>> addTransaction(@RequestBody Map<String, String> arguments) {
        return null;
    }
}
