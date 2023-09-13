package com.shbhack.ypz.dto.shb.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class ShbSearchNameResponseDTO<T> {

    private String bankCode;
    private String accountNumber;
    private String userName;

    private Map<String, String> dataHeader = new HashMap<>();
    private Map<String, String> dataBody = new HashMap<>();

    private ShbSearchNameResponseDTO(Map<String, String> dataHeader, Map<String, String> dataBody) {
        this.dataHeader = dataHeader;
        this.dataBody = dataBody;
    }

    public <Map> ShbSearchNameResponseDTO<Map> of(Map dataHeader, Map dataBody) {
        ShbSearchNameResponseDTO<Map> shbSearchNameResponseDTO = new ShbSearchNameResponseDTO<>();
        shbSearchNameResponseDTO.setDataHeader((java.util.Map<String, String>) dataHeader);
        shbSearchNameResponseDTO.setDataBody((java.util.Map<String, String>) dataBody);

        return new ShbSearchNameResponseDTO<Map>((java.util.Map<String, String>) dataHeader, (java.util.Map<String, String>) dataBody);
    }

    // dataBody 에서 값 변수에 mapping
    public void insertValues(){
        this.bankCode = this.dataBody.get("입금은행코드");
        this.accountNumber = this.dataBody.get("입금계좌번호");
        this.userName = this.dataBody.get("입금계좌성명");
    }

}
