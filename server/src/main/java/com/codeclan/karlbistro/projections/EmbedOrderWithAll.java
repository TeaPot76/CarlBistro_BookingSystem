package com.codeclan.karlbistro.projections;

import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.models.MenuItem;
import com.codeclan.karlbistro.models.Order;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedOrderWithAll", types = Order.class)
public interface EmbedOrderWithAll {
    Booking getBooking();
    MenuItem getMenuItem();
}
