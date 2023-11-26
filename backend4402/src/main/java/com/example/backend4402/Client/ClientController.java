package com.example.backend4402.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
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
        List<Map<String, Object>> agent = cliService.executeSql(sql); // Call your service method her
        if(agent.isEmpty()){
            return null;
        }
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
        String clientID = arguments.get("clientID");
        String sql = "SELECT * FROM APPOINTMENT WHERE CLIENT_ID = " + clientID + ";";
        return cliService.executeSql(sql);
    }

    @PostMapping("/getAgents")
    public List<Map<String, Object>> getAgents(@RequestBody Map<String, String> arguments){
        List<Map<String, Object>> AGENTS = new ArrayList<>();
        String clientID = arguments.get("clientID");
        String getAgents = "SELECT * FROM CLIENT_AGENT WHERE CLIENT_ID = " + clientID + ";";
        List<Map<String, Object>> result = cliService.executeSql(getAgents);

        for(int i = 0; i < result.size(); i++){
           Map<String, Object> IDS = result.get(i);
           String currentID = IDS.get("AGENT_ID").toString();
           String currentAgentQuery = "SELECT * FROM AGENT WHERE AGENT_ID = " +currentID;
           List<Map<String, Object>> agentResult = cliService.executeSql(currentAgentQuery);
           if(!agentResult.isEmpty()){
               AGENTS.add(agentResult.get(0));
           }
        }
        return AGENTS;
    }

    @PostMapping("/getTransactions")
    public List<Map<String, Object>> getTransactions(@RequestBody Map<String, String> arguments){
        String clientID = arguments.get("clientID");
        String sql = "SELECT * FROM TRANSACTION WHERE CLIENT_ID = " + clientID + ";";
        return cliService.executeSql(sql);
    }

    @PostMapping("/payTransaction")
    public void payTransaction(@RequestBody Map<String, String> arguments){
        String transactionID = arguments.get("transactionID");
        LocalDate date = LocalDate.now();
        String updateSQL = "UPDATE TRANSACTION SET DATE_SENT = '" + date.toString() + "' WHERE TRANSACTION_ID = " + transactionID;
        cliService.executeSql(updateSQL);
    }

}
