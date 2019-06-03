package com.codeclan.karlbistro.repositories.BookerRepository;


import com.codeclan.karlbistro.models.Booker;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.sql.JoinType;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class BookerRepositoryImpl implements BookerRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Long> orderBookersIDByNumberOfBookings() {
        List<Long> results = null;

        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Booker.class, "booker");
            cr.createAlias("booker.bookings", "bookingAlias", Criteria.LEFT_JOIN);
            cr.setProjection(Projections.projectionList()
                    .add(Projections.groupProperty("booker.id"))
                    .add(Projections.count("bookingAlias.id").as("numberOfBookings")));
            cr.addOrder(Order.desc("numberOfBookings"));
            results = cr.list();


        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return results;

    }
}


