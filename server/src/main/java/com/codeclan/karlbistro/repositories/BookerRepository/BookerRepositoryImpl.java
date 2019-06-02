package com.codeclan.karlbistro.repositories.BookerRepository;


import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.models.SeatingTable;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;
import java.util.List;

public class BookerRepositoryImpl implements BookerRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Booker> getBookersByBookingFrequency() {
        List<Booker> results = null;

        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Booker.class);
            cr.add(Restrictions.);

//// Define the CriteriaQuery
            CriteriaBuilder cb = em.getCriteriaBuilder();
//            CriteriaQuery<Book> cq = cb.createQuery(Book.class);
//            Root<Book> root = cq.from(Book.class);
//            cq.orderBy(cb.asc(root.get(Book_.title)));
//
//// Execute query with pagination
//            List<Book> books = em.createQuery(cq).getResultList();

            results = cr.list();
            System.out.println(results);
        } catch (HibernateException ex){
            ex.printStackTrace();
        }
        return results;

    }
}
