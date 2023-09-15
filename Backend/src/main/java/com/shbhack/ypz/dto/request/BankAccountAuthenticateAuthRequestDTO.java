package com.shbhack.ypz.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BankAccountAuthenticateAuthRequestDTO {
	private String memberId;
	private String code;
	
	public BankAccountAuthenticateAuthRequestDTO(String memberId, String code) {
		this.memberId = memberId;
		this.code = code;
	}
}
