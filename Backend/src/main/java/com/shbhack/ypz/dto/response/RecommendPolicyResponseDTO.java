package com.shbhack.ypz.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecommendPolicyResponseDTO {
    private String name;
    private String endDay;
    private String like;
}
