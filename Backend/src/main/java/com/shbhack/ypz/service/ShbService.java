package com.shbhack.ypz.service;

import com.shbhack.ypz.client.ShbFeignClient;
import com.shbhack.ypz.dto.shb.request.ShbSearchNameRequestDTO;
import com.shbhack.ypz.dto.shb.request.ShbSendSolPushRequestDTO;
import com.shbhack.ypz.dto.shb.response.ShbSearchNameResponseDTO;
import com.shbhack.ypz.dto.shb.response.ShbSendSolPushResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

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

        return responseDTO.getUserName();
    }

    public String sendSolPush(String clientNo, String message){
        ShbSendSolPushRequestDTO requestDTO = new ShbSendSolPushRequestDTO();

        requestDTO.setDataHeader(new HashMap<String, String>() {{
            put("apikey", "2023_Shinhan_SSAFY_Hackathon");
        }});
        requestDTO.setDataBody(new HashMap<String, String>() {{
            put("제휴고객번호", clientNo);
            put("발송메시지", message);
        }});

        ShbSendSolPushResponseDTO responseDTO = shbFeignClient.sendSolPush(requestDTO);
        responseDTO.insertValues();

        return responseDTO.getResultStatus();

    }
}
