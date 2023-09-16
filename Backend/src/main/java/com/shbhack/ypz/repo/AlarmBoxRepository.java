package com.shbhack.ypz.repo;

import com.shbhack.ypz.domain.AlarmBox;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AlarmBoxRepository extends JpaRepository<AlarmBox, Long>{
    @Query("SELECT a FROM AlarmBox a WHERE a.member.memberId = ?1")
    List<AlarmBox>  findAllByMemberId(String memberId);
}
