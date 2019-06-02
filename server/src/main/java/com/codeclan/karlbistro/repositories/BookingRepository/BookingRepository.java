package com.codeclan.karlbistro.repositories.BookingRepository;

import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.projections.EmbedBookingWithBooker;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long>, BookerRepositoryCustom {

}
