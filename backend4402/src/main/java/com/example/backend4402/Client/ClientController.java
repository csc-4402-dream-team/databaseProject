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

//    @PostMapping("/addClient")
//    public boolean addClient(@RequestBody Map<String, String> arguments){
//        String firstName = arguments.get("firstName");
//        String lastName = arguments.get("lastName");
//        String email = arguments.get("email");
//        String phone = arguments.get("phone");
//        String street = arguments.get("city");
//        String city = arguments.get("city");
//        String state = arguments.get("state");
//        String zipcode = arguments.get("zipcode");
//        Client newClient = new Client(firstName, lastName, email, phone, street, city, state, zipcode);
//        return cliService.addClient(newClient);
//    }

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
