package com.codeclan.karlbistro.controllers;

import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
