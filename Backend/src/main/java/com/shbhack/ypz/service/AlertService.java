package com.shbhack.ypz.service;

import com.shbhack.ypz.domain.StartAlarm;
import org.springframework.scheduling.annotation.Scheduled;

public interface AlertService {
    @Scheduled(cron = "0 0 12 1/1 * ? *")   // 매일 12시에 실행
    void sendNewAlert(StartAlarm startAlarm);
}
