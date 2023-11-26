package com.example.backend4402.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/client")
public class ClientController {
    private final ClientService cliService;
    @Autowired
    public ClientController(ClientService myService) {
        this.cliService = myService;
    }

    @PostMapping("/getClient")
    public Map<String, Object> getClient(@RequestBody Map<String, String> arguments){
        String clientID = arguments.get("clientID");
        List<Map<String, Object>> x = cliService.getClient(Long.parseLong(clientID));
        Map<String, Object> clientObj = x.get(0);
        clientObj.put("clientID", clientID);
        return clientObj;
    }

    @PostMapping("/getProperties")
    public List<Map<String, Object>> getProperties(){
        String sql = "SELECT * FROM PROPERTY";
        return cliService.executeSql(sql); // Call your service method here
    }

    @PostMapping("/getPropertyAgent")
    public Map<String, Object> getPropertyAgent(@RequestBody Map<String, String> arguments){
        String agentID = arguments.get("agentID");
        String sql = "SELECT * FROM AGENT WHERE AGENT_ID = " + agentID;
        List<Map<String, Object>> agent = cliService.executeSql(sql); // Call your service method here
        return agent.get(0);
    }

    @PostMapping("/addAppointment")
    public int addAppointment(@RequestBody Map<String, String> arguments) {
        String agentID = arguments.get("agentID");
        String clientID = arguments.get("clientID");
        String propertyID = arguments.get("propertyID");
        String date = arguments.get("date");
        String time = arguments.get("time");
        String purpose = arguments.get("purpose");
        String sql =
                "INSERT INTO APPOINTMENT (CLIENT_ID, AGENT_ID, PROPERTY_ID, APPT_DATE, APPT_TIME, PURPOSE) VALUES " +
                        " (" + clientID + ", " + agentID + ", " + propertyID + ", '" + date + "', '" + time + "', '" + purpose + "');";
        int result =  cliService.getKey(sql);
        cliService.addRelationship(clientID, agentID);
        return result;
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
