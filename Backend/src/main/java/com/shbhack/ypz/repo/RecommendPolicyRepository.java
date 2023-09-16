package com.shbhack.ypz.repo;

import com.shbhack.ypz.domain.RecommendPolicy;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RecommendPolicyRepository extends JpaRepository<RecommendPolicy, Long> {

    @Query("SELECT r FROM RecommendPolicy r WHERE r.member.memberId = ?1 order by r.endDay")
    List<RecommendPolicy> findAllByMemberId(String memberId, Pageable pageable);
}
