package com.codeclan.karlbistro.repositories.MenuItemRepository;

import com.codeclan.karlbistro.models.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Long>, MenuItemRepositoryCustom {
}
