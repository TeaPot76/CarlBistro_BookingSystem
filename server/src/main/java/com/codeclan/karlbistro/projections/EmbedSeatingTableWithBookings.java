package com.codeclan.karlbistro.projections;

import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.models.SeatingTable;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedSeatingTableWithBookings", types = SeatingTable.class)
public interface EmbedSeatingTableWithBookings {
    int getCapacity();
    int getTableNumber();
    List<Booking> getBookings();
}
