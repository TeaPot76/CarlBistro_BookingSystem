package com.codeclan.karlbistro.models;

import com.codeclan.karlbistro.repositories.MenuItemRepository.MenuItemRepository;
import com.codeclan.karlbistro.repositories.MenuRepository.MenuRepository;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class MenuTest {
    Menu menu;
    MenuItem menuItem;
    MenuItem menuItem2;
    List<MenuItem> menu1;

    @Before
    public void setup() throws Exception {
        menu1 = new ArrayList<>();
        menuItem = new MenuItem("chicken", "bb", 100);
        menuItem2 = new MenuItem("salad", "starter", 5);
        menu1.add(menuItem);
        menu = new Menu("lunch");
    }

    @Test
    public void contexLoad() {

    };



    @Autowired
    MenuRepository menuRepository;
    @Autowired
    MenuItemRepository menuItemRepository;

    @Test
    public void canSetMenuItem() {
        menu.setItems(menu1);
        assertEquals(menu1, menu.getItems());
    }


    @Test
    public void canFindMenuItemById() {
        List<MenuItem> found = menuItemRepository.findMenuItemById(0);
        assertEquals(1, found.size());
        assertEquals(menuItem, menu.getItems());

    }
}
