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

/* How we would use this in react
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        // Fetch a simple greeting message
        axios.get('http://localhost:8080/api/hello')
            .then(response => setMessage(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    const addNumbers = () => {
        // Send a POST request with JSON data
        axios.post('http://localhost:8080/api/add', { num1: 5, num2: 7 })
            .then(response => setResult(response.data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <p>{message}</p>
            <button onClick={addNumbers}>Add Numbers</button>
            <p>{result}</p>
        </div>
    );
}

export default App;

 */