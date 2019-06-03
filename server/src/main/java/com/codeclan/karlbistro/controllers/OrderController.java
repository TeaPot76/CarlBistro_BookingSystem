package com.codeclan.karlbistro.controllers;

import com.codeclan.karlbistro.repositories.OrderRepository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/orders")
public class OrderController {
    @Autowired
    OrderRepository orderRepository;
}
