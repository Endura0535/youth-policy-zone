package com.shbhack.ypz.service;

import com.shbhack.ypz.client.ShbFeignClient;
import com.shbhack.ypz.dto.request.ShbSearchNameRequestDTO;
import com.shbhack.ypz.dto.response.ShbSearchNameResponseDTO;
import feign.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.ResponseData;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@Slf4j
public class ShbService {

    @Autowired
    private ShbFeignClient shbFeignClient;

    // 예금주 실명 조회
    public String searchName(ShbSearchNameRequestDTO shbSearchNameRequestDTO) {
//        ShbSearchNameResponseDTO shbSearchNameResponseDTO = shbFeignClient.searchName(shbSearchNameRequestDTO);
//        return shbSearchNameResponseDTO.getDataHeader().get("name");
//        Response response = shbFeignClient.searchName(shbSearchNameRequestDTO);

        Map<String, String> dataHeader = new HashMap<>();
        dataHeader.put("apikey", "2023_Shinhan_SSAFY_Hackathon");

        Map<String, String> dataBody = new HashMap<>();
        dataBody.put("입금은행코드", "088");
        dataBody.put("입금계좌번호", "110184999999");

        shbSearchNameRequestDTO.setDataHeader(dataHeader);
        shbSearchNameRequestDTO.setDataBody(dataBody);

        ShbSearchNameResponseDTO responseDTO = shbFeignClient.searchName(shbSearchNameRequestDTO);
//        Response result = shbFeignClient.searchName(shbSearchNameRequestDTO);
//        Response result = shbFeignClient.searchName();
        log.info("response: {}", responseDTO.toString());
        return responseDTO.getUserName();
    }
}
