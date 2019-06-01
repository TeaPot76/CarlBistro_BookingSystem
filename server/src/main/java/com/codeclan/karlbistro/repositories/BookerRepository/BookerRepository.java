package com.codeclan.karlbistro.repositories.BookerRepository;

import com.codeclan.karlbistro.models.Booker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookerRepository extends JpaRepository<Booker, Long>, BookerRepositoryCustom {



}
