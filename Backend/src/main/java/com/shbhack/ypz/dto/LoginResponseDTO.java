package com.shbhack.ypz.dto;

import com.shbhack.ypz.domain.Member;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class LoginResponseDTO {

	private Member member;
	private String accessToken;
	private String refreshToken;
}
