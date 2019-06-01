package com.codeclan.karlbistro.repositories.OrderRepository;

import com.codeclan.karlbistro.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long>, OrderRepositoryCustom {
}
