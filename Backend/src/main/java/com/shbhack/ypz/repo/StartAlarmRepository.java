package com.shbhack.ypz.repo;

import com.shbhack.ypz.domain.StartAlarm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StartAlarmRepository extends JpaRepository<StartAlarm, Long>{

    List<StartAlarm> findAll();
}
