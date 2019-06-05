package com.codeclan.karlbistro.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "seatingTables")
public class SeatingTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "table_number")
    private int tableNumber;

    @JsonIgnore
    @OneToMany(mappedBy = "seatingTable", fetch = FetchType.LAZY)
    private List<Booking> bookings;



    public SeatingTable(int capacity, int tableNumber) {
        this.capacity = capacity;
        this.tableNumber = tableNumber;
        this.bookings = new ArrayList<>();
    }

    public SeatingTable() {
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public void addBooking(Booking booking){
        this.bookings.add(booking);
    }

    public void removeBooking(Booking booking){
        this.bookings.remove(booking);
    }

    public int countBookings(){
        return bookings.size();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public boolean isLargeEnough(int capacity){
        if (this.capacity < capacity) {return false;}
        else {return true;}
    }

    public boolean isAvailableOnDate(int year, int month, int day){
        for (Booking booking : bookings)
            if (LocalDate.of(year, month, day).equals(booking.getDate())) return false;
        return true;
    }

    //If the table has a booking for today it returns false
    public boolean isAvailableToday(){
        for (Booking booking : bookings)
            if (LocalDate.now().equals(booking.getDate())) return false;
        return true;
    }

    // If the table has a booking for now or the next two hours it returns false
    public boolean isAvailableNowAndNextTwoHours(){
        LocalTime bookingStart = LocalTime.now();
        LocalTime bookingTime = null;

        for (Booking booking : bookings) {
            bookingTime = booking.getTime();

            if (bookingStart.isAfter(bookingTime) && (bookingStart.isBefore(bookingTime.plusHours(2)))) {
                return false;
            }
        }
        return true;
    }

    // If the table has a booking for the next two hours AND today it returns false, otherwise true
    public boolean isAvailableRightNow(){
        if (isAvailableToday() == false  && isAvailableNowAndNextTwoHours() == false) {
            return false;
        }
        return true;
    }


    public boolean isAvailableAtTime(int hour, int minute) {
        LocalTime bookingStart = LocalTime.of(hour, minute + 1);
        LocalTime bookingTime = null;

        for (Booking booking : bookings) {
            bookingTime = booking.getTime();

            if (bookingStart.isAfter(bookingTime) && (bookingStart.isBefore(bookingTime.plusHours(2)))) {
                return false;
            }
        }
        return true;
    }




}
