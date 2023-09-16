package com.shbhack.ypz.service.impl;

import com.shbhack.ypz.domain.AlarmBox;
import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.domain.Policy;
import com.shbhack.ypz.domain.StartAlarm;
import com.shbhack.ypz.repo.AlarmBoxRepository;
import com.shbhack.ypz.repo.StartAlarmRepository;
import com.shbhack.ypz.service.ShbService;
import com.shbhack.ypz.service.StartAlarmService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class StartAlarmServiceImpl implements StartAlarmService {

    ShbService shbService = new ShbService();
    private final StartAlarmRepository startAlarmRepository;
    private final AlarmBoxRepository alarmBoxRepository;

    @Override
    public void sendNewAlert(StartAlarm startAlarm) {

        Member member = startAlarm.getMember();

        String clientNo = member.getMemberNo().toString();
        String message = "{memberName}님, 새로운 정책이 등록되었습니다."
                .replace("{memberName}", member.getName());

        shbService.sendSolPush(clientNo, message);

    }

    //  TODO: startAlarm을 AlarmBox에 저장하는 함수 구현
    @Override
    public void saveToAlarmbox(StartAlarm startAlarm) {
        Member member = startAlarm.getMember();
        Policy policy = startAlarm.getPolicy();

        AlarmBox alarmBox = new AlarmBox();

        alarmBox.setMember(member);
        alarmBox.setPolicy(policy);
        alarmBox.setAlarmType('N');
        LocalDate now = LocalDate.now();
        alarmBox.setExpireDt(java.sql.Date.valueOf(now.plusDays(3)));

        alarmBoxRepository.save(alarmBox);
    }


    @Override
    public void moveToAlarmbox(StartAlarm startAlarm) {
        saveToAlarmbox(startAlarm);
        startAlarmRepository.deleteByStartAlarmNo(startAlarm.getStartAlarmNo());
    }

    @Scheduled(cron = "0 42 9 ? * *")
    @Override
    public void sendAllNewAlert() {

        log.info("--------------sendAllNewAlert-----------------");

        while (startAlarmRepository.count() != 0) {
            // 1. startAlarm에서 1개를 가져온다.
            StartAlarm startAlarm = startAlarmRepository.findFirst1ByOrderByStartAlarmNo();

            // 2. 해당 알람의 사용자에게 알람을 보낸다. (sendSolPush)
            sendNewAlert(startAlarm);

            // 3. 알람을 보낸 사용자와 일치하는 startAlarm을 모두 AlarmBox로 옮긴다.

            Member member = startAlarm.getMember();
            List<StartAlarm> startAlarmList = startAlarmRepository.findAllByMemberNo(member.getMemberNo());

            for (StartAlarm sa : startAlarmList) {
                moveToAlarmbox(sa);
            }
        }

    }

    @Override
    public void test() {
        StartAlarm startAlarm = startAlarmRepository.findFirst1ByOrderByStartAlarmNo();
        if (startAlarm != null)
            log.info(startAlarm.toString());
    }

}
