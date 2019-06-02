package com.codeclan.karlbistro.repositories.BookerRepository;

import com.codeclan.karlbistro.models.Booker;

import java.util.List;

public interface BookerRepositoryCustom {
    List<Booker> getBookersByBookingFrequency();
}
