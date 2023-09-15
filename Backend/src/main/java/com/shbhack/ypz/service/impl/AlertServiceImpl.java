package com.shbhack.ypz.service.impl;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.domain.Policy;
import com.shbhack.ypz.domain.StartAlarm;
import com.shbhack.ypz.service.AlertService;
import com.shbhack.ypz.service.ShbService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class AlertServiceImpl implements AlertService {

    ShbService shbService = new ShbService();
    @Override
    public void sendNewAlert(StartAlarm startAlarm) {
        log.info("--------------sendNewAlert-----------------");

        Member member = startAlarm.getMember();
        Policy policy = startAlarm.getPolicy();

        String clientNo = member.getMemberNo().toString();
        String message = "{memberName}님, 새로운 정책 {policyName} 이 등록되었습니다."
                .replace("{memberName}", member.getName())
                .replace("{policyName}", policy.getName());

        shbService.sendSolPush(clientNo, message);

        // TODO: 전송 후 DB에서 삭제하기
    }

}
