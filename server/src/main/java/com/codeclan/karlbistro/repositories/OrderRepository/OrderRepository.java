package com.codeclan.karlbistro.repositories.OrderRepository;

import com.codeclan.karlbistro.models.Order;
import com.codeclan.karlbistro.projections.EmbedOrderWithAll;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedOrderWithAll.class)
public interface OrderRepository extends JpaRepository<Order, Long>, OrderRepositoryCustom {
}
