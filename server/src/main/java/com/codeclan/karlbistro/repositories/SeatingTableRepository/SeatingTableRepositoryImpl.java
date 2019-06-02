package com.codeclan.karlbistro.repositories.SeatingTableRepository;

import com.codeclan.karlbistro.models.SeatingTable;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
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
    public  List<SeatingTable> getAvailableTables(int partysize) {
        List<SeatingTable> results = null;

        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(SeatingTable.class);
            cr.add(Restrictions.ge("capacity",partysize));

            results = cr.list();
            System.out.println(results);
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
                    Restrictions.eq("bookingsAlias.date", LocalDate.of(2019, 03, 27))));


            results = cr1.list();
            results.addAll(cr2.list());

        } catch (HibernateException ex){
            ex.printStackTrace();
        }
        return results;



    };
}
