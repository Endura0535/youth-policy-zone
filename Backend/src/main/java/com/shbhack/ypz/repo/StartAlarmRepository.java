package com.shbhack.ypz.repo;

import com.shbhack.ypz.domain.StartAlarm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StartAlarmRepository extends JpaRepository<StartAlarm, Long>{

    StartAlarm findFirst1ByOrderByStartAlarmNo();

    @Query("SELECT s FROM StartAlarm s WHERE s.member = ?1")
    List<StartAlarm> findAllByMemberNo(long memberNo);

    void deleteByStartAlarmNo(long startAlarmNo);

}
