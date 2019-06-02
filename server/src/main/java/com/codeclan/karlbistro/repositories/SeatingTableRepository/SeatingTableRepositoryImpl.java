package com.codeclan.karlbistro.repositories.SeatingTableRepository;

import com.codeclan.karlbistro.models.SeatingTable;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class SeatingTableRepositoryImpl implements SeatingTableRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    //String date, String hours, String mins, int partysize
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
}
