package com.codeclan.karlbistro.models;

import org.junit.Before;
import org.junit.Test;

import java.sql.SQLOutput;
import java.time.LocalDate;
import java.time.LocalTime;

import static org.junit.Assert.*;

public class SeatingTableTest {

    SeatingTable table;
    SeatingTable table1;
    Booker booker;
    LocalDate date;
    LocalTime time;
    Booking booking;


    @Before
    public void setUp() throws Exception {
        table = new SeatingTable(4, 6);
        table1 = new SeatingTable(2, 3);
        booker = new Booker("Katharina", "01412345213");
        date = LocalDate.now();
        time = LocalTime.of(17,0);
        booking = new Booking(date, time, 4, booker, table, "no-note" );
        table.addBooking(booking);

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

    @Test
    public void isNotAvailableToday() {
        assertEquals(false, table.isAvailableToday());
    }

    @Test
    public void isAvailableToday() {
        assertEquals(true, table1.isAvailableToday());
    }

    @Test
    public void isAvailableAtDate(){
        assertEquals(true, table.isAvailableOnDate(2019, 03, 5));
    }

    @Test
    public void isNotAvailableOnDate(){
        assertEquals(false, table.isAvailableOnDate(2019, 06, 5));
    }

    @Test
    public void isAvailableAtTimeFalse() {
        assertEquals(false, table.isAvailableAtTime(17, 30));
    }

    @Test
    public void isAvailableAtTimeFalseHours() {

        LocalTime time1 = LocalTime.of(20, 00);
        LocalTime time2 = LocalTime.of(23, 00);
        LocalTime booking = LocalTime.of(21, 00);

        System.out.println(booking.isAfter(time1));
        System.out.println(booking.plusHours(2).isBefore(time2));

        assertEquals(false, table.isAvailableAtTime(20, 00));
    }

    @Test
    public void isAvailableAtTimeTrue() {
        assertEquals(true, table.isAvailableAtTime(12, 30));
    }



}