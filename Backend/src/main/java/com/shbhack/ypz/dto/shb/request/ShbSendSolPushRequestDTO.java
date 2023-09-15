package com.shbhack.ypz.dto.shb.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShbSendSolPushRequestDTO {

    Map<String, String> dataHeader = new HashMap();
    Map<String, String> dataBody = new HashMap();

}
