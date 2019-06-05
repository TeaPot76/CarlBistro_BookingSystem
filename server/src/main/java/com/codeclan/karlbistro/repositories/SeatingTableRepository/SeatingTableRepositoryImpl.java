package com.codeclan.karlbistro.repositories.SeatingTableRepository;

import com.codeclan.karlbistro.models.SeatingTable;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class SeatingTableRepositoryImpl implements SeatingTableRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Autowired
    SeatingTableRepository seatingTableRepository;

    @Transactional
    public List<SeatingTable> getSeatingTablesWhereCapacityIsGreaterOrEqualToPartySize(int partySize){
        List<SeatingTable> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr1 = session.createCriteria(SeatingTable.class);
            cr1.add(Restrictions.ge("capacity", partySize));
            results = cr1.list();

        } catch (HibernateException ex){
            ex.printStackTrace();
        }
        return results;
    }


}

