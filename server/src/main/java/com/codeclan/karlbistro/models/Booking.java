package com.codeclan.karlbistro.models;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;

    @Column(name = "time")
    @DateTimeFormat(iso = DateTimeFormat.ISO.TIME)
    private LocalTime time;

    @Column(name = "party_size")
    private int partySize;

    @ManyToOne
    @JoinColumn(name = "booker_id", nullable = false)
    private Booker booker;

    @ManyToOne
    @JoinColumn(name = "seating_table_id", nullable = false)
    private SeatingTable seatingTable;
//    mappedBy reference an unknown target entity property: com.codeclan.karlbistro.models.Booking.seatingtable

    @OneToMany(mappedBy = "booking", fetch = FetchType.LAZY)
    private List<Order> orders;

    @Column(name = "booking_note")
    private String bookingNote;

    public Booking(LocalDate date, LocalTime time, int partySize, Booker booker, SeatingTable table, String bookingNote) {
        this.date = date;
        this.time = time;
        this.partySize = partySize;
        this.booker = booker;
        this.seatingTable = table;
        this.orders = new ArrayList<>();
        this.bookingNote = bookingNote;
    }

    public Booking() {
    }

    public void addOrder(Order order){
        orders.add(order);
    }

    public void removeOrder(Order order){
        orders.remove(order);
    }

    public int countOrders(){
        return orders.size();
    }

    public double countOrdersCost(){
        double total = 0;
        for (Order order: orders) {
            total += order.getMenuItem().getCost();
        }
        return total;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }

    public Booker getBooker() {
        return booker;
    }

    public void setBooker(Booker booker) {
        this.booker = booker;
    }

    public SeatingTable getTable() {
        return seatingTable;
    }

    public void setTable(SeatingTable table) {
        if(table.getCapacity()>=partySize) {
            this.seatingTable = table;
        }
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public String getBookingNote() {
        return bookingNote;
    }

    public void setBookingNote(String bookingNote) {
        this.bookingNote = bookingNote;
    }
}
