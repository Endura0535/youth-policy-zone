package com.shbhack.ypz.dto.response;

import com.shbhack.ypz.domain.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SignInResponseDTO {

	private String token;
}
