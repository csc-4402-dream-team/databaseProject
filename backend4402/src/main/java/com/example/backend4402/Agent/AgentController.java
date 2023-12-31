package com.example.backend4402.Agent;

import org.apache.tomcat.util.json.JSONParser;
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
    public Map<String, Object> getAgent(@RequestBody Map<String, String> arguments){
        Long agentID = Long.parseLong(arguments.get("agentID"));
        List<Map<String, Object>> agent = agentService.getAgent(agentID);
        Map<String, Object> agentobj = agent.get(0);
        agentobj.put("agentID", agentID);
        return agentobj;
    }

    @PostMapping("/addProperty")
    public int addProperty(@RequestBody Map<String, String> arguments) {
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
        String image = arguments.get("image");

        String sql2 = "INSERT INTO PROPERTY (AGENT_ID, PROPERTY_TYPE, STREET, CITY, STATE, ZIPCODE, LIST_PRICE, NUM_BEDROOMS, NUM_BATHROOMS, SQUARE_FOOTAGE, DESCRIPTION, LISTING_DATE, STATUS, IMAGE_URL) VALUES ("
                + agentID + ",'" + propertyType + "','" + street + "','" + city + "','"
                + state
                + "'," + zipcode + "," + listPrice + "," + numBeds + ","
                + numBaths + "," + squareFootage + ",'" + description + "','" + date + "','" + status + "','" + image + "');";

        try {
            int propertyID = agentService.addProperty(sql2);
            return propertyID;
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }

    @PostMapping("/getProperties")
    public List<Map<String, Object>> getAgentProperties(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        String sql = "SELECT * FROM PROPERTY WHERE AGENT_ID = " + agentID;
        return agentService.getProperties(sql);
    }

    @PostMapping("/getAppointments")
    public List<Map<String, Object>> getAppointments(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        String sql = "SELECT * FROM APPOINTMENT WHERE AGENT_ID = " + agentID;
        return agentService.getAppointments(sql);
    }

    @PostMapping("/getClients")
    public List<Map<String, Object>> getClients(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        String sql = "SELECT C.CLIENT_ID, C.FIRST_NAME AS CLIENT_FIRST_NAME, C.LAST_NAME AS CLIENT_LAST_NAME, C.EMAIL AS CLIENT_EMAIL, C.PHONE AS CLIENT_PHONE, C.STREET AS CLIENT_STREET, C.CITY AS CLIENT_CITY, C.STATE AS CLIENT_STATE, C.ZIPCODE AS CLIENT_ZIPCODE FROM CLIENT C JOIN CLIENT_AGENT CA ON C.CLIENT_ID = CA.CLIENT_ID WHERE CA.AGENT_ID = " + agentID + ";";
        return agentService.getClients(sql);
    }

    @PostMapping("/addTransaction")
    public List<Map<String, Object>> addTransaction(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        String clientID = arguments.get("clientID");
        String amount = arguments.get("amount");
        String transactionType = arguments.get("transactionType");
        String propertyID = arguments.get("propertyID");
        String dateSent = arguments.get("dateSent");

        String sql = "INSERT INTO TRANSACTION (PROPERTY_ID, AGENT_ID, CLIENT_ID, DATE_SENT,AMOUNT, TYPE) VALUES (" + propertyID + "," + agentID  + "," + clientID + ",'" + dateSent+ "'," + amount + ",'" + transactionType + "')";
        return agentService.addTransaction(sql);
    }

    @PostMapping("/getTransactions")
    public List<Map<String, Object>> getTransactions(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        String sql = "SELECT * FROM TRANSACTION WHERE AGENT_ID = " + agentID;
        return agentService.getTransactions(sql);
    }

    @PostMapping("/getOffice")
    public List<Map<String, Object>> getOffice(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        String sql = "SELECT O.OFFICE_ID,O.OFFICE_NAME,O.STREET,O.CITY,O.STATE,O.ZIPCODE,O.PHONE FROM OFFICE O INNER JOIN AGENT A ON O.OFFICE_ID = A.OFFICE_ID WHERE A.AGENT_ID =" + agentID;
        return agentService.getOffice(sql);
    }
}
