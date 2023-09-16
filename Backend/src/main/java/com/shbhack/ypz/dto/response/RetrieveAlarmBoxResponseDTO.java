package com.shbhack.ypz.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class RetrieveAlarmBoxResponseDTO {
    private String name;
    private char type;
}
