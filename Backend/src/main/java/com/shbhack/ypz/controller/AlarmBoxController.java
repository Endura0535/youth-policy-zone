package com.shbhack.ypz.controller;

import com.shbhack.ypz.domain.Member;
import com.shbhack.ypz.dto.response.RetrieveAlarmBoxResponseDTO;
import com.shbhack.ypz.service.AlarmBoxService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Tag(name = "alarmBox", description = "받은 알림함")
@RestController
@RequiredArgsConstructor
@RequestMapping("/alarmbox")
public class AlarmBoxController {

    private final AlarmBoxService alarmBoxService;

    @GetMapping("/")
    public ResponseEntity<?> retrieveAlarmBox(@AuthenticationPrincipal UserDetails userDetails){

        try {
            Member member = (Member) userDetails;

            Map<String, Object> res = new HashMap<>();

            List<RetrieveAlarmBoxResponseDTO> alarmList = alarmBoxService.retrieveAlarmBox(member.getMemberId());

            res.put("alarms", alarmList);

            return new ResponseEntity<Map>(res, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<String>("받은 알림을 찾을 수 없습니다.", HttpStatus.BAD_REQUEST);
        }
    }
}
