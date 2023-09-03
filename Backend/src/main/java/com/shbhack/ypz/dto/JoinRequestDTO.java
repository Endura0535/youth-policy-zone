package com.shbhack.ypz.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JoinRequestDTO {

	private String memberId;
	private String password;
	private String accountNo;
	
}
