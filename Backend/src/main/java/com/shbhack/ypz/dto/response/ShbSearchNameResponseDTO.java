package com.shbhack.ypz.dto.response;

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

    private T dataHeader;
    private T dataBody;

    private ShbSearchNameResponseDTO(String bankCode, String accountNumber, String userName, T dataHeader, T dataBody) {
        this.bankCode = bankCode;
        this.accountNumber = accountNumber;
        this.userName = userName;
        this.dataHeader = dataHeader;
        this.dataBody = dataBody;
    }

    public static <T> ShbSearchNameResponseDTO<T> of(String bankCode, String accountNumber, String userName, T dataHeader, T dataBody) {
        return new ShbSearchNameResponseDTO<>(bankCode, accountNumber, userName, dataHeader, dataBody);
    }

}
