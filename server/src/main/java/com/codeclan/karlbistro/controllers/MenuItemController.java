package com.codeclan.karlbistro.controllers;

import com.codeclan.karlbistro.models.MenuItem;
import com.codeclan.karlbistro.repositories.MenuItemRepository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/menuItems")
public class MenuItemController {

    @Autowired
    MenuItemRepository menuItemRepository;

}
