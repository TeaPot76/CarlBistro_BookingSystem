package com.codeclan.karlbistro.projections;

import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.models.Order;
import com.codeclan.karlbistro.models.SeatingTable;
import org.springframework.data.rest.core.config.Projection;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Projection(name = "embedBookerWithBookings", types = Booker.class)
public interface EmbedBookerWithBookings {
    String getName();
    String getPhone();
    List<Booking> getBookings();
}
