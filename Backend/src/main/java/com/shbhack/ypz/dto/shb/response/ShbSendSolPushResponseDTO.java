package com.shbhack.ypz.dto.shb.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class ShbSendSolPushResponseDTO<T> {

    private String resultStatus;

    private Map<String, String> dataHeader = new HashMap<>();
    private Map<String, String> dataBody = new HashMap<>();

    private ShbSendSolPushResponseDTO(Map<String, String> dataHeader, Map<String, String> dataBody) {
        this.dataHeader = dataHeader;
        this.dataBody = dataBody;
    }

    public void insertValues(){
        this.resultStatus = this.dataBody.get("수행결과");
    }


}
