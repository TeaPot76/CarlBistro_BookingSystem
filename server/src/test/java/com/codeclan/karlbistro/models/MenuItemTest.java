package com.codeclan.karlbistro.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class MenuItemTest {

    MenuItem menuItem;

    @Before
    public void setUp() throws Exception {
        menuItem = new MenuItem("hummus", "starter", 100.0);
    }

    @Test
    public void getName() {
        assertEquals("hummus", menuItem.getName());
    }

    @Test
    public void setName() {
        menuItem.setName("carrot");
        assertEquals("carrot", menuItem.getName());

    }

    @Test
    public void getType() {
        assertEquals("starter", menuItem.getType());
    }

    @Test
    public void setType() {
        menuItem.setType("main");
        assertEquals("main", menuItem.getType());

    }

    @Test
    public void getCost() {
        assertEquals(100.0, menuItem.getCost(),0);
    }

    @Test
    public void setCost() {
        menuItem.setCost(50.0);
        assertEquals(50.0, menuItem.getCost(),0);

    }
}