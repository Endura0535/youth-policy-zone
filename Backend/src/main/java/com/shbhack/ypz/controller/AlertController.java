package com.shbhack.ypz.controller;

import com.shbhack.ypz.service.StartAlarmService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "alert", description = "알람")
@RestController
@RequiredArgsConstructor
@RequestMapping("/alert")
public class AlertController {

    private final StartAlarmService startAlarmService;

    @Operation(summary = "알람 테스트")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "알람 테스트 성공"),
            @ApiResponse(responseCode = "400", description = "알람 테스트 실패")
    })
    @PostMapping("/test")
    public void test() {
        startAlarmService.test();
    }

}
