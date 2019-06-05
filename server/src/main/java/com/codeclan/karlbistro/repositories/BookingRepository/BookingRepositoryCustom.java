package com.codeclan.karlbistro.repositories.BookingRepository;

import com.codeclan.karlbistro.models.Booking;

import java.util.List;

public interface BookingRepositoryCustom {

    List<Booking> findBookingsTodayBySeatingTableId(Long seatingTableId);

}
