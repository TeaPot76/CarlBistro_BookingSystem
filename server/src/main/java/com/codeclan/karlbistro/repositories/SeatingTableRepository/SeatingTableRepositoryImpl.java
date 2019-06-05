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
    public  List<SeatingTable> getAvailableTables(
            int partysize,
            String date,
            int hr,
            int min) {
        List<SeatingTable> results = null;

        LocalDate lDate = LocalDate.parse(date);

        String timeStr = hr + ":" + min + ":00";
        LocalTime lTime = LocalTime.parse(timeStr);
        LocalTime lTimePlusTwo = lTime.plusHours(2);

        String queryStr = "SELECT * FROM seating_tables WHERE seating_tables.capacity >= ?1 AND seating_tables.id NOT IN (SELECT seating_tables.id FROM seating_tables INNER JOIN bookings ON seating_tables.id = bookings.seating_table_id WHERE date = '?2' AND time BETWEEN '?3' AND '?4')";
        Session session = entityManager.unwrap(Session.class);

        try {
            Query query = entityManager.createNativeQuery(queryStr);
            query.setParameter(1, partysize);
            query.setParameter(2, lDate);
            query.setParameter(3, lTime);
            query.setParameter(4, lTimePlusTwo);
            results = query.getResultList();
//            Criteria cr = session.createCriteria(SeatingTable.class);
//            cr.add(Restrictions.ge("capacity",partysize));
//
//            results = cr.list();
//            System.out.println(results);
        } catch (HibernateException ex){
            ex.printStackTrace();
        }
        return results;
    }

    @Transactional
    public List<SeatingTable> getAvailableTablesNow(int partysize){

        List<SeatingTable> results = null;
        LocalDate todaysDate = LocalDate.now();
        LocalTime now = LocalTime.now();

        Session session = entityManager.unwrap(Session.class);

        try {
            // gets all tables with big enough capacity that have no bookings
            Criteria cr1 = session.createCriteria(SeatingTable.class);
            cr1.add(Restrictions.isEmpty("bookings"));
            cr1.add(Restrictions.ge("capacity", partysize));

            //doesnt work yet
            Criteria cr2 = session.createCriteria(SeatingTable.class);
            cr2.add(Restrictions.ge("capacity", partysize));
            cr2.createAlias("bookings", "bookingsAlias");
            cr2.add(Restrictions.not(
                    Restrictions.eq("bookingsAlias.date", todaysDate)));
            cr2.add(Restrictions.not(
                    Restrictions.eq("bookingsAlias.time", now)));


            results = cr1.list();
            results.addAll(cr2.list());

        } catch (HibernateException ex){
            ex.printStackTrace();
        }
        return results;
    }

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
