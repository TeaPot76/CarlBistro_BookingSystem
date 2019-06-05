package com.codeclan.karlbistro.controllers;


import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.models.SeatingTable;
import com.codeclan.karlbistro.repositories.SeatingTableRepository.SeatingTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/seatingTables", method= RequestMethod.GET)
public class SeatingTableController {
    @Autowired
    SeatingTableRepository seatingTableRepository;

    @GetMapping(value = "/partySize/{partySize}")
    public List<SeatingTable> getSeatingTablesWhereCapacityIsGreaterOrEqualToPartySize(@PathVariable int partySize) {
        return seatingTableRepository.getSeatingTablesWhereCapacityIsGreaterOrEqualToPartySize(partySize);
    }

    //Get all available tables by partysize right now
    @GetMapping(value = "/partysize/{partysize}/today/now")
    public List<SeatingTable> getAvailableTablesNow(@PathVariable int partysize) {
        LocalDate todaysDate = LocalDate.now();
        LocalTime todaysTime = LocalTime.now();
        List<SeatingTable> availableTables = new ArrayList<>();

        List<SeatingTable> tablesBigEnough = seatingTableRepository.getSeatingTablesWhereCapacityIsGreaterOrEqualToPartySize(partysize);

        for (SeatingTable seatingTable : tablesBigEnough)
            if (seatingTable.isAvailableRightNow()) {
                availableTables.add(seatingTable);
            }
        return availableTables;
    }

    @GetMapping(value = "/currentlyOccupied")
    public List <SeatingTable> getOccupiedTablesNow(){
        LocalDate todaysDate = LocalDate.now();
        LocalTime todaysTime = LocalTime.now();
        List<SeatingTable> availableTables = new ArrayList<>();

        List<SeatingTable> allTables = seatingTableRepository.findAll();

        for (SeatingTable seatingTable : allTables)
            if (seatingTable.isAvailableRightNow() == false) {
                availableTables.add(seatingTable);
            }
        return availableTables;
    }
}



//    @GetMapping(value = "/partysize/{partysize}/date/{date}/hr/{hr}/min/{min}")
//    public List<SeatingTable> getAvailableTables(
//            @PathVariable int partysize,
//            @PathVariable String date,
//            @PathVariable int hr,
//            @PathVariable int min){
//        return seatingTableRepository.getAvailableTables(partysize, date, hr, min);
//    };

