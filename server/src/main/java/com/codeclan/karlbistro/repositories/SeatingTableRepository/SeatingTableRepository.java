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

//    @Query(value = "SELECT * FROM seating_tables\n" +
//                    "WHERE seating_tables.capacity >= 4\n" +
//                    "AND seating_tables.id NOT IN (\n" +
//                    "SELECT seating_tables.id\n" +
//                    "FROM seating_tables\n" +
//                    "WHERE date = '2019-03-27'\n" +
//                    "AND time BETWEEN '18:00:00' AND '20:00:00\n", nativeQuery = true)
//    List<SeatingTable> getAvailableTablesHard();

//    @Query(value = "SELECT * FROM  seatingTables", nativeQuery = true)
//            List<SeatingTable> getAvailableTablesHard(int test);



    List<SeatingTable> getAvailableTablesNow(int partysize);

    List<SeatingTable> getSeatingTablesWhereCapacityIsGreaterOrEqualToPartySize(int partySize);
}
