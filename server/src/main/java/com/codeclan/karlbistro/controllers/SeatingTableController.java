package com.codeclan.karlbistro.controllers;


import com.codeclan.karlbistro.models.SeatingTable;
import com.codeclan.karlbistro.repositories.SeatingTableRepository.SeatingTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/seatingTables", method= RequestMethod.GET)
public class SeatingTableController {
    @Autowired
    SeatingTableRepository seatingTableRepository;

    @GetMapping(value = "/partysize/{partysize}")
    public List<SeatingTable> getAvailableTables(@PathVariable int partysize){
        return seatingTableRepository.getAvailableTables(partysize);
    }

    //not functional yet!
    @GetMapping(value = "/partysize/{partysize}/today/now")
    public List<SeatingTable> getAvailableTablesNow(@PathVariable int partysize){
        return seatingTableRepository.getAvailableTablesNow(partysize);
    }
}
