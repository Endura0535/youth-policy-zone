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

    public String searchName(String bankNo, String accountNo) {
        ShbSearchNameRequestDTO requestDTO = new ShbSearchNameRequestDTO();

        requestDTO.setDataHeader(new HashMap<String, String>() {{
            put("apikey", "2023_Shinhan_SSAFY_Hackathon");
        }});

        requestDTO.setDataBody(new HashMap<String, String>() {{
            put("입금은행코드", bankNo);
            put("입금계좌번호", accountNo);
        }});

        ShbSearchNameResponseDTO responseDTO = shbFeignClient.searchName(requestDTO);
        responseDTO.insertValues();

        return responseDTO.getBankCode();
    }
}
