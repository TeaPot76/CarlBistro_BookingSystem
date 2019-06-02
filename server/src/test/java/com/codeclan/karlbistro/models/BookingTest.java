package com.codeclan.karlbistro.models;

import org.junit.Before;
import org.junit.Test;

import java.time.LocalDate;
import java.time.LocalTime;

import static org.junit.Assert.*;

public class BookingTest {

    MenuItem food;
    MenuItem drink;
    Order order1;
    Order order2;
    Booker booker;
    SeatingTable table;
    Booking booking;
    LocalDate date;
    LocalTime time;

    @Before
    public void setUp() throws Exception {
        food = new MenuItem("cake", "desert", 5.0);
        drink = new MenuItem("coke", "drink", 1.0);
        booker = new Booker("Katharina", "01412345213");
        table = new SeatingTable(4, 1);
        date = LocalDate.of(2019,3, 31);
        time = LocalTime.of(17,0);
        booking = new Booking(date, time, 4, booker, table, "no-note" );
        order1 = new Order(booking, food);
        order2 = new Order(booking, drink);
    }

    @Test
    public void addOrder() {
        booking.addOrder(order1);
        assertEquals(1, booking.countOrders());
    }

    @Test
    public void removeOrder() {
        booking.addOrder(order1);
        booking.removeOrder(order1);
        assertEquals(0, booking.countOrders());
    }

    @Test
    public void countOrdersCost() {
        booking.addOrder(order1);
        booking.addOrder(order2);
        assertEquals(6.0, booking.countOrdersCost(),0);
    }

    @Test
    public void getDate() {
        LocalDate date = LocalDate.of(2019,03,31);
        assertEquals(date, booking.getDate());
    }

    @Test
    public void setDate() {
        String date = "2019-04-15";
        LocalDate localDate = LocalDate.parse(date);
        booking.setDate(localDate);
        assertEquals(localDate, booking.getDate());
    }

    @Test
    public void getTime() {
        LocalTime localTime = LocalTime.of(17, 0);
        assertEquals(localTime, booking.getTime());
    }

    @Test
    public void setTime() {
        String time = "17:00";
        LocalTime localTime = LocalTime.parse(time);
        booking.setTime(localTime);
        assertEquals(localTime, booking.getTime());
    }

    @Test
    public void getPartySize() {
        assertEquals(4, booking.getPartySize());
    }

    @Test
    public void setPartySize() {
        booking.setPartySize(2);
        assertEquals(2, booking.getPartySize());
    }

    @Test
    public void getBooker() {
        assertEquals(booker, booking.getBooker());
    }

    @Test
    public void setBooker() {
        Booker booker2 = new Booker("Alasdair", "01412345213");
        booking.setBooker(booker2);
        assertEquals(booker2, booking.getBooker());
    }


    @Test
    public void setTable() {
        booking.setSeatingTable(table);
        assertEquals(table, booking.getSeatingTable());
    }

    @Test
    public void setTableTooSmall() {
        SeatingTable table2 = new SeatingTable(1,5);
        booking.setSeatingTable(table2);
        assertEquals(table, booking.getSeatingTable());
    }

    @Test
    public void setTableTooSmallFromOtherTable() {
        SeatingTable table2 = new SeatingTable(1,5);
        booking.setSeatingTable(table2);
//        should not set the second table
        assertEquals(table, booking.getSeatingTable());
    }

    @Test
    public void getBookingNote() {
        assertEquals("no-note", booking.getBookingNote());
    }

    @Test
    public void setBookingNote() {
        booking.setBookingNote("hello");
        assertEquals("hello", booking.getBookingNote());
    }
}