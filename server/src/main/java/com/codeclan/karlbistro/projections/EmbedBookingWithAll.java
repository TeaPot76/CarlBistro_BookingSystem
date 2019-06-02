package com.codeclan.karlbistro.projections;

import com.codeclan.karlbistro.models.*;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Projection(name = "embedBookingWithAll", types = {Booking.class})
public interface EmbedBookingWithAll {
    LocalDate getDate();
    LocalTime getTime();
    int getPartySize();
    Booker getBooker();
    List<Order> getOrders();
    SeatingTable getSeatingTable();

}
