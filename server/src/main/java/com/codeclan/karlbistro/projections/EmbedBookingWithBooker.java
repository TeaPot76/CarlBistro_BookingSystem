package com.codeclan.karlbistro.projections;

import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.models.Order;
import com.codeclan.karlbistro.models.SeatingTable;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Projection(name = "embedBookingWithBooker", types = Booker.class)
public interface EmbedBookingWithBooker {
//    LocalDate getDate();
//    LocalTime getTime();
//    int getPartySize();
//    SeatingTable getTable();
//    Booker getBooker();
//    String getBookingNote();
//    List<Order> getOrders();
    String getName();
    String getPhone();
    List<Booking> getBookings();
}
