package com.example.backend4402;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class Controller {
    @GetMapping("/hello")
    public String sayHello() {
        return "Java Backend: Connected!\n";
    }

    @PostMapping("/add")
    public String addNumbers(@RequestBody Map<String, Integer> numbers) {
        int result = numbers.get("num1") + numbers.get("num2");
        return "The result is: " + result;
    }

}