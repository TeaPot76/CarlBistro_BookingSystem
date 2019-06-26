package com.codeclan.karlbistro.models;

import com.codeclan.karlbistro.repositories.MenuRepository.MenuRepository;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.*;

public class BookerTest {

    Booker booker;
    Booking booking;

    @Before
    public void setUp() throws Exception {
        booker = new Booker("Alasdair", "01383123321");
        booking = new Booking();

    }




    @Test
    public void getName() {
        assertEquals("Alasdair", booker.getName());
    }

    @Test
    public void setName() {
        booker.setName("Johnny");
        assertEquals("Johnny", booker.getName());
    }

    @Test
    public void getPhone() {
        assertEquals("01383123321", booker.getPhone());

    }

    @Test
    public void setPhone() {
        booker.setPhone("01383321123");
        assertEquals("01383321123", booker.getPhone());

    }

    @Test
    public void addBooking() {
    }

    @Test
    public void removeBooking() {
    }

    @Test
    public void countBookings() {
    }

//    @Test
//    public void getBookings() {
//    }
//
//    @Test
//    public void setBookings() {
//    }
}