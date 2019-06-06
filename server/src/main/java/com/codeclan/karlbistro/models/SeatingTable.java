package com.codeclan.karlbistro.models;

import com.codeclan.karlbistro.repositories.BookingRepository.BookingRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;

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

    public boolean isBookedAtSomePointToday(){
        for (Booking booking : bookings)
            if (LocalDate.now().equals(booking.getDate())) return true;
        return false;
    }

    // If the table has a booking for now or the next two hours it returns false
    public boolean isBookedBetweenNowAndNextTwoHours(){

        LocalTime proposedStart = LocalTime.now();
        LocalTime proposedEnd = LocalTime.now().plusHours(2);
        LocalTime bookedStart = null;
        LocalTime bookedEnd = null;


        for (Booking booking : bookings) {
            bookedStart = booking.getTime();
            bookedEnd = booking.getTime().plusHours(2);

            if (bookedStart.isBefore(proposedStart) && (bookedEnd.isAfter(proposedStart))) {
                return true;
            }
            else if (bookedStart.isAfter(proposedStart) && (bookedStart.isBefore(proposedEnd))) {
                return true;
            }
            else if (bookedStart.equals(proposedStart)) {
                return true;
            }
        }
        return false;
    }

    // If the table has a booking for the next two hours AND today it returns false, otherwise true
    public boolean isAvailableRightNow(){
        if (isBookedAtSomePointToday() == true  && isBookedBetweenNowAndNextTwoHours() == true) {
            return false;
        }
        return true;
    }


//    @Autowired
//    BookingRepository bookingRepository;

    public boolean isAvailableAtTimeAndDate(String date, String hour, String min){

        String time = hour + ":" + min;
        LocalTime proposedStart = LocalTime.parse( time );
        LocalTime proposedEnd = proposedStart.plusHours(2);
        LocalTime bookedStart = null;
        LocalTime bookedEnd = null;
        Long tableId = getId();

        LocalDate proposedDate = LocalDate.parse(date);

        for (Booking booking : bookings) {
            bookedStart = booking.getTime();
            bookedEnd = booking.getTime().plusHours(2);


            if ((bookedStart.isBefore(proposedEnd)) && (bookedEnd.isAfter(proposedStart))) {
                System.out.println("first if");
                return true;
            }
            else if ((bookedStart.isBefore(proposedEnd)) && (bookedEnd.isAfter(proposedEnd))) {
                System.out.println("second if");

                return true;
            }
            else if ((bookedStart.equals(proposedStart))  && (booking.getDate() == proposedDate )) {
                System.out.println("third if");

                return true;
            }
        }
        return false;
    }

}

//            System.out.println("---");
//            System.out.println(bookedStart);
//            System.out.println("is before");
//            System.out.println(proposedEnd);
//            System.out.println(bookedEnd);
//            System.out.println("is after");
//            System.out.println(proposedStart);
//            System.out.println(booking.getDate());
//            System.out.println("is equal to");
//            System.out.println(proposedDate);
//            System.out.println("---");
