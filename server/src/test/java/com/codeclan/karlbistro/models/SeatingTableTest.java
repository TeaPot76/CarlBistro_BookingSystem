package com.codeclan.karlbistro.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class SeatingTableTest {

    SeatingTable table;

    @Before
    public void setUp() throws Exception {
        table = new SeatingTable(4, 6);
    }

    @Test
    public void getCapacity() {
        assertEquals(4, table.getCapacity());
    }

    @Test
    public void setCapacity() {
        table.setCapacity(5);
        assertEquals(5, table.getCapacity());

    }

    @Test
    public void getTableNumber() {
        assertEquals(6, table.getTableNumber());

    }

    @Test
    public void setTableNumber() {
        table.setTableNumber(1);
        assertEquals(1, table.getTableNumber());

    }
}