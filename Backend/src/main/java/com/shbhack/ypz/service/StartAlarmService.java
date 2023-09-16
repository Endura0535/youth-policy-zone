package com.shbhack.ypz.service;

import com.shbhack.ypz.domain.StartAlarm;

public interface StartAlarmService {
    void sendAllNewAlert();

    void sendNewAlert(StartAlarm startAlarm);

    void saveToAlarmbox(StartAlarm startAlarm);

    void moveToAlarmbox(StartAlarm startAlarm);

    void test();
}
