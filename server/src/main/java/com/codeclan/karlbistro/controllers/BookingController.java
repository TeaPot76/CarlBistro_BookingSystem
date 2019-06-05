package com.codeclan.karlbistro.controllers;

import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepository;
import com.codeclan.karlbistro.repositories.BookingRepository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class BookingController {

    @Autowired
    BookingRepository bookingRepository;

    @RequestMapping(value = "/allbookings")
    public List<Booking> bookings() {
        return bookingRepository.findAll();
    }

    @RequestMapping(value = "/bookings/today/seatingTable/{seatingTableId}")
    public List<Booking> findBookingsTodayBySeatingTableId(@PathVariable Long seatingTableId) {
        return bookingRepository.findBookingsTodayBySeatingTableId(seatingTableId);
    }
}

