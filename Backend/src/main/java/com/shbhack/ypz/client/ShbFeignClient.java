package com.shbhack.ypz.client;

import com.shbhack.ypz.config.YpzFeignConfig;
import com.shbhack.ypz.dto.shb.request.ShbSearchNameRequestDTO;
import com.shbhack.ypz.dto.shb.response.ShbSearchNameResponseDTO;
import com.shbhack.ypz.dto.shb.response.ShbSendSolPushResponseDTO;
import com.shbhack.ypz.dto.shb.request.ShbSendSolPushRequestDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "${feign.shb.name}", url = "${feign.shb.url}", configuration = YpzFeignConfig.class)
public interface ShbFeignClient {

    // 예금주 실명 조회
    @PostMapping(value = "/v1/search/name")
    ShbSearchNameResponseDTO searchName(@RequestBody ShbSearchNameRequestDTO shbSearchNameRequestDTO);

    // SOL 앱푸시 알람 전송
    @PostMapping(value = "/v1/notice/sol-push")
    ShbSendSolPushResponseDTO sendSolPush(@RequestBody ShbSendSolPushRequestDTO shbSendSolPushRequestDTO);

}
