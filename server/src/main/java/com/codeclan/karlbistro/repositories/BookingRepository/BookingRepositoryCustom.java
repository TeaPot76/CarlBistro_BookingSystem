package com.codeclan.karlbistro.repositories.BookingRepository;

import com.codeclan.karlbistro.models.Booking;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface BookingRepositoryCustom {

    List<Booking> findBookingsTodayBySeatingTableId(Long seatingTableId);

    List<Booking> findBookingsByDateAndSeatingTableId(String date, Long seatingTableId);

}
