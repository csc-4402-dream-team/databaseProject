package com.example.backend4402.Client;
import com.example.backend4402.Client.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Service;

@Service
public class ClientService {
    private final JdbcTemplate jdbcTemplate;
    @Autowired
    public ClientService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public boolean addClient(Client client) {
        String sql = "INSERT INTO CLIENT (first_name, last_name, email, phone, street, city, state, zipcode) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try {
            int rowsAffected = jdbcTemplate.update(sql,
                    client.getFirstName(),
                    client.getLastName(),
                    client.getEmail(),
                    client.getPhone(),
                    client.getStreet(),
                    client.getCity(),
                    client.getState(),
                    client.getZipcode());
            return rowsAffected > 0;
        } catch (Exception e) {
            System.out.println(e);
            e.printStackTrace();
            return false;
        }
    }

    public Client getClient(long clientId) {
        String sql = "SELECT * FROM CLIENT WHERE client_id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{clientId}, (resultSet, i) -> {
                Client client = new Client();
                client.setFirstName(resultSet.getString("first_name"));
                client.setLastName(resultSet.getString("last_name"));
                client.setEmail(resultSet.getString("email"));
                client.setPhone(resultSet.getString("phone"));
                client.setStreet(resultSet.getString("street"));
                client.setCity(resultSet.getString("city"));
                client.setState(resultSet.getString("state"));
                client.setZipcode(resultSet.getString("zipcode"));
                return client;
            });
        } catch (Exception e) {
            e.printStackTrace();
            return null; // Return null or throw an exception based on your error-handling strategy
        }
    }
}
