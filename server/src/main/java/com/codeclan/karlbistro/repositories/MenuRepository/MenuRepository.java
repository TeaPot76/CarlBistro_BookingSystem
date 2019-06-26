package com.codeclan.karlbistro.repositories.MenuRepository;

import com.codeclan.karlbistro.models.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MenuRepository extends JpaRepository<Menu, Long>, MenuRepositoryCustom {
    List<Long> findMenuItemById(Long id);
}
