package com.shbhack.ypz.repo;

import com.shbhack.ypz.domain.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PolicyRepository extends JpaRepository<Policy, Long> {

    @Query("select p from Policy p ORDER BY p.id DESC")
    List<Policy> findAllPolicy();
}
