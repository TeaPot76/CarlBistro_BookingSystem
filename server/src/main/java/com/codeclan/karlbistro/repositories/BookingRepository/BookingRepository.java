package com.codeclan.karlbistro.repositories.BookingRepository;

import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.projections.EmbedBookingWithAll;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedBookingWithAll.class)
public interface BookingRepository extends JpaRepository<Booking, Long>, BookingRepositoryCustom {

    List<Booking> findBookingsTodayBySeatingTableId( Long seatingTableId);
}
