package com.codeclan.karlbistro.repositories.BookingRepository;

import com.codeclan.karlbistro.models.Booking;
import com.codeclan.karlbistro.models.SeatingTable;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepositoryCustom;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class BookingRepositoryImpl implements BookingRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Booking> findBookingsTodayBySeatingTableId(Long seatingTableId){

            List<Booking> results = null;
            Session session = entityManager.unwrap(Session.class);
            LocalDate date = LocalDate.now();
            LocalTime time = LocalTime.now();

            try {
                Criteria cr = session.createCriteria(Booking.class);
                cr.createAlias("seatingTable", "seatingTableAlias");
                cr.add(Restrictions.eq("seatingTableAlias.id", seatingTableId));
                cr.add(Restrictions.eq("date", date));
                cr.add(Restrictions.ge("time", time));
                cr.addOrder(Order.asc("time"));

                results = cr.list();


            } catch (HibernateException ex){
                ex.printStackTrace();
            }

            return results;
        }

    public List<Booking> findBookingsByDateAndSeatingTableId(String dateString, Long seatingTableId){

        List<Booking> results = null;
        Session session = entityManager.unwrap(Session.class);
        LocalDate date = LocalDate.parse(dateString);
        System.out.println(date);
        System.out.println(seatingTableId);

        try {
            Criteria cr = session.createCriteria(Booking.class);

            cr.createAlias("seatingTable", "seatingTableAlias");
            cr.add(Restrictions.eq("seatingTableAlias.id", seatingTableId));
            cr.add(Restrictions.eq("date", date));


            results = cr.list();


        } catch (HibernateException ex){
            ex.printStackTrace();
        }

        return results;
    }


    }


