package com.codeclan.karlbistro.repositories.SeatingTableRepository;

import com.codeclan.karlbistro.models.SeatingTable;

import java.util.List;

public interface SeatingTableRepositoryCustom {

    List<SeatingTable> getSeatingTablesWhereCapacityIsGreaterOrEqualToPartySize(int partysize);
}
