package com.codeclan.karlbistro.controllers;

import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/bookers")
public class BookerController {

    @Autowired
    BookerRepository bookerRepository;

    @GetMapping(value = "/numberOfBookings")
    public List<Long> orderBookersIDByNumberOfBookings(){
        return bookerRepository.orderBookersIDByNumberOfBookings();
    }

}
