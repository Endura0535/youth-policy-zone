package com.shbhack.ypz.dto.request;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class ShbSearchNameRequestDTO {

    Map<String, String> dataHeader = new HashMap();
    Map<String, String> dataBody = new HashMap();

}
