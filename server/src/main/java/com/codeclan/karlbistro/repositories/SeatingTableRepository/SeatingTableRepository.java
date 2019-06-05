package com.codeclan.karlbistro.repositories.SeatingTableRepository;

import com.codeclan.karlbistro.models.SeatingTable;
import com.codeclan.karlbistro.projections.EmbedSeatingTableWithBookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedSeatingTableWithBookings.class)
public interface SeatingTableRepository extends JpaRepository<SeatingTable, Long>, SeatingTableRepositoryCustom {

    List<SeatingTable> getSeatingTablesWhereCapacityIsGreaterOrEqualToPartySize(int partySize);
}
