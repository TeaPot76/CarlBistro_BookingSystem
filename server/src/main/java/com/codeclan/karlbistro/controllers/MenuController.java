package com.codeclan.karlbistro.controllers;

import com.codeclan.karlbistro.repositories.MenuRepository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value ="/menu")
public class MenuController {
    @Autowired
    MenuRepository menuRepository;

    @GetMapping(value ="/menu/{item}")
    public List<Long> findMenuItemById(@PathVariable Long id){
        return menuRepository.findMenuItemById(id);
    }
}
