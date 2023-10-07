package com.example.backend4402;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class Controller {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from the Java backend!";
    }
    @PostMapping("/add")
    public String addNumbers(@RequestBody Map<String, Integer> numbers) {
        int result = 100 + 100;
        return "The result is: " + result;
    }
}